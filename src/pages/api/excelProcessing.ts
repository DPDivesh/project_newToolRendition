import prisma from "../api/client";
import { PrismaClient } from "@prisma/client";
import { authOptions } from "./auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { PrismaClientOptions } from "@prisma/client/runtime";
import { isEqual, parse, parseISO } from "date-fns";
import { fieldEncryptionMiddleware } from "prisma-field-encryption";
import { error } from "console";
require("dotenv").config();
let decryptionKey: any = process.env.PRISMA_FIELD_ENCRYPTION; // Add other keys here. Order does not matter.

const path = require("path");
const fs = require("fs");
const baseDir = process.cwd();
const downloadPath = path.join(baseDir, "src", "pages", "api", "downloads");
const puppeteer = require("puppeteer");
const XLSX = require("xlsx");
export const client = new PrismaClient();

// const pass = process.env.SECRET_USER_PASSWORD;
// const email = process.env.SECRET_USER_EMAIL;

const puppeteerLaunch = async (userName: string, userPass: string) => {
  try {
    await (async () => {
      // const browser = await puppeteer.launch({headless: "new"})
      const browser = await puppeteer.launch({
        headless: "new", // if we need them.
      });

      const [page] = await browser.pages();

      //logs in to the website for chromium browser
      await page.goto("https://columbusdata.net/cdswebtool/login/login.aspx");
      await page.waitForSelector("#UsernameTextbox");
      // eslint-disable-next-line no-unused-expressions
      await page.type("#UsernameTextbox", `${userName}`), { delay: 1000 };

      // eslint-disable-next-line no-unused-expressions
      await page.type("#PasswordTextbox", `${userPass}`), { delay: 10000 };
      await page.click("#LoginButton");
      //goes to page with main content to download
      //enable this to reload
      await page.goto(
        "https://columbusdata.net/cdswebtool/includes/report.aspx?rptname=rptTerminalStatusCassetteBalances"
      ),
        {
          waitUntil: "domcontentloaded",
        };
      //navigated and downloads excel file
      try {
        await page.waitForSelector("#ddlReportFormat_Input");
        await page.click("#ddlReportFormat_Input");
      } catch (err) {}

      const elements = await page.$x(
        '//*[@id="ddlReportFormat_DropDown"]/div/ul/li[3]'
      );
      await elements[0].evaluate((b: { click: () => any }) => b.click());
      const client = await page.target().createCDPSession();
      await client.send("Page.setDownloadBehavior", {
        behavior: "allow",
        downloadPath: downloadPath,
      });
      await page.click("#btnView");
      await page.waitForNetworkIdle({ idleTime: 10000 });
      browser.close();
    })();
  } catch (err) {
    console.log(err);
  }
};

async function columbusDataProcessing(usersEmail: string) {
  // Now this works
  //  throw(Error("error test"))

  client.$use(
    fieldEncryptionMiddleware({
      encryptionKey: process.env.PRISMA_FIELD_ENCRYPTION,
      decryptionKeys: [
        decryptionKey, // Add other keys here. Order does not matter.
      ],
    })
  );
  const userTest = await client.scrapeInfo.findUnique({
    where: {
      email: usersEmail,
    },
  });
  let userName: string = userTest?.cUserName!;
  let userPass: string = userTest?.cPass!;

  await puppeteerLaunch(userName, userPass);

  const filePath = path.join(
    baseDir,
    "src",
    "pages",
    "api",
    "downloads",
    "rptTerminalStatusCassetteBalances.xls"
  );
  console.debug("File path:", filePath);
  const fileData = fs.readFileSync(filePath);
  const workBook = XLSX.read(fileData, { type: "buffer" });
  var workSheet = workBook.Sheets["rptTerminalStatusCassetteBalanc"];
  XLSX.writeFile(workBook, "rptTerminalStatusCassetteBalances.xlsx");
  const arrName = XLSX.utils.sheet_to_json(workSheet, { range: 3 });

  const jsonSorted = await arrName.map((jsonSorted: { [x: string]: any }) => ({
    TerminalID: `${jsonSorted["Terminal ID"]}`,
    storeName: `${jsonSorted["Name"]}`,
    cashBalance: `${jsonSorted["Cash\nBalance"]}`,
    balType: `${jsonSorted["Bal Type"]}`,
    estCashOut: `${Math.round(jsonSorted["Est. Cash Out"])}`,
    lastCommunication: `${jsonSorted["Last\nCommunication"]}`,
    lastCashWD: `${jsonSorted["Last\nCash W/D"]}`,
    rejectBalance: `${jsonSorted["Reject\nBalance"]}`,
    balanceAsOf: `${jsonSorted["Balance as of"]}`,
    Cassette1: `${jsonSorted["Cassette 1"]}`,
    minReload: "2,000",
  }));

  let allPosts = await prisma.posts.findMany({
    where: { userEmail: usersEmail },
  });

  jsonSorted.map(
    (entry: {
      TerminalID: any;
      storeName: string;
      cashBalance: any;
      balType: any;
      estCashOut: any;
      lastCommunication: any;
      lastCashWD: any;
      rejectBalance: any;
      balanceAsOf: any;
      Cassette1: any;
      minReload: any;
    }) => {
      prisma.posts
        .upsert({
          where: { TerminalId: entry.TerminalID },
          update: {
            TerminalId: entry.TerminalID,
            userEmail: usersEmail,
            storeName: entry.storeName,
            cashBalance: entry.cashBalance,
            balType: entry.balType,
            estCashOut: entry.estCashOut,
            lastCommunication: entry.lastCommunication,
            lastCashWD: entry.lastCashWD,
            rejectBalance: entry.rejectBalance,
            balanceAsOf: entry.balanceAsOf,
            Cassette1: entry.Cassette1,
            minReload: entry.minReload,
          },
          create: {
            TerminalId: entry.TerminalID,
            userEmail: usersEmail,
            storeName: entry.storeName,
            cashBalance: entry.cashBalance,
            balType: entry.balType,
            estCashOut: entry.estCashOut,
            lastCommunication: entry.lastCommunication,
            lastCashWD: entry.lastCashWD,
            rejectBalance: entry.rejectBalance,
            balanceAsOf: entry.balanceAsOf,
            Cassette1: entry.Cassette1,
            minReload: entry.minReload,
          },
        })
        .catch((err: any) => {
          console.log(err);
        });
    }
  );

  allPosts = await prisma.posts.findMany({
    where: { userEmail: usersEmail, NOT: { storeName: "undefined" } },
  });
  console.log("all Posts done");
  return allPosts;
}

export default columbusDataProcessing;
