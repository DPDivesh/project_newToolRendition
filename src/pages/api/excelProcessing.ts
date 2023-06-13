import { PrismaClient } from '@prisma/client';
import { authOptions } from './auth/[...nextauth]';
import { getServerSession } from "next-auth/next"
import { PrismaClientOptions } from '@prisma/client/runtime';
import {isEqual, parse, parseISO} from "date-fns"
require('dotenv').config()

const path = require('path');
const fs = require('fs');
const baseDir = process.cwd();
const downloadPath = path.join(baseDir, 'src',"pages","api", 'downloads');
const puppeteer = require('puppeteer');
const XLSX = require("xlsx");


const pass = process.env.SECRET_USER_PASSWORD;
const email = process.env.SECRET_USER_EMAIL;
const prisma = new PrismaClient()


const puppeteerLaunch=async()=>{
  
    try{
    await (async () => {
      const browser = await puppeteer.launch({headless: true})
      const page = await browser.newPage();      

      //logs in to the website for chromium browser
      await page.goto('https://columbusdata.net/cdswebtool/login/login.aspx');
      await page.waitForSelector("#UsernameTextbox")
      // eslint-disable-next-line no-unused-expressions
      await page.type("#UsernameTextbox",email),{delay:2000}


      // eslint-disable-next-line no-unused-expressions
      await page.type("#PasswordTextbox",pass),{delay:20000}
      await page.click("#LoginButton");
      //goes to page with main content to download
      await page.goto("https://columbusdata.net/cdswebtool/includes/report.aspx?rptname=rptTerminalStatusCassetteBalances"),{
        waitUntil: "domcontentloaded",
      };
      //navigated and downloads excel file
      try{ await page.waitForSelector("#ddlReportFormat_Input")
      await page.click("#ddlReportFormat_Input");}catch(err){
    }
     
      const elements = await page.$x('//*[@id="ddlReportFormat_DropDown"]/div/ul/li[3]');
      await elements[0].evaluate((b: { click: () => any; }) => b.click());
      const client = await page.target().createCDPSession();
      await client.send("Page.setDownloadBehavior", {
        behavior: "allow",
        downloadPath: downloadPath,
      });
      console.log("Downloading")
      await page.click("#btnView");
      await page.waitForNetworkIdle({idleTime:9000})

    })();
  }catch(err){
    return console.log("puppeteer error",err);
    
  }
    }

async function columbusDataProcessing(usersEmail:string){
  
    await puppeteerLaunch();
    const filePath = path.join(baseDir, 'src',"pages","api", 'downloads', 'rptTerminalStatusCassetteBalances.xls');
    console.debug('File path:', filePath);
    const fileData = fs.readFileSync(filePath);
    const workBook = XLSX.read(fileData, { type: 'buffer' });
    var workSheet = workBook.Sheets["rptTerminalStatusCassetteBalanc"];
    XLSX.writeFile(workBook, "rptTerminalStatusCassetteBalances.xlsx")
    const arrName = XLSX.utils.sheet_to_json(workSheet,{range:3});

    const jsonSorted = await arrName.map((jsonSorted: { [x: string]: any; }) =>({
      TerminalID: `${jsonSorted["Terminal ID"]}`,
      storeName:`${jsonSorted["Name"]}`,
      cashBalance: `${jsonSorted["Cash\nBalance"]}`,
      balType:`${jsonSorted["Bal Type"]}`,
      estCashOut:`${Math.round(jsonSorted["Est. Cash Out"])}`,
      lastCommunication:`${jsonSorted["Last\nCommunication"]}`,
      lastCashWD:`${jsonSorted["Last\nCash W/D"]}`,
      rejectBalance:`${jsonSorted["Reject\nBalance"]}`,
      balanceAsOf: `${jsonSorted["Balance as of"]}`,
      Cassette1:`${jsonSorted["Cassette 1"]}`,
      minReload: "2,000"
    }));
    // arrName.forEach((machine)=>{
    //     let machineInfo = new machineModel(machine); 
    //     // console.log(machineInfo,"Info");
    //     machineInfo.save();
    // })
    // alerts(arrName);

 
    
  // setInterval(() => {
  //   emailDatabaseUpdate(allPosts);
  //   console.log("interval")
  // }, 9000);

// console.log(allPosts,"----------------------------------");
  //if the post doest exist make it if it does update
// if (allPosts){
  
  let allPosts = await prisma.posts.findMany({where:{userEmail:usersEmail}})
  // console.log(allPosts,"ALL POSTS");
  console.log(jsonSorted,jsonSorted.length,"------------------JSON SORTED---------------------")

  if(allPosts.length==0||allPosts == null){
    jsonSorted.map((entry: { TerminalID: any; storeName:string; cashBalance: any; balType: any; estCashOut: any; lastCommunication: any; lastCashWD: any; rejectBalance: any; balanceAsOf: any; Cassette1: any; minReload: any; })=>{
    prisma.posts.create({data:{
      TerminalId:entry.TerminalID,
      userEmail:usersEmail,
      storeName:entry.storeName,
      cashBalance:entry.cashBalance,
      balType:entry.balType,
      estCashOut:entry.estCashOut,
      lastCommunication:entry.lastCommunication,
      lastCashWD:entry.lastCashWD,
      rejectBalance:entry.rejectBalance,
      balanceAsOf:entry.balanceAsOf,
      Cassette1:entry.Cassette1,
      minReload:entry.minReload
    }}).catch((err: any)=>{console.log(err)});

  })
}else{

  // console.log(session)
      // console.log("#####################################################")
  jsonSorted.map(async (entry: any)=>{
    //set to find all posts with the entries terminal id 
    //right now its updating all of the post for each value? of json sorted
               //      (we need to get the dbs)        (We have this) 
    let filteredPosts:any = await prisma.posts.findMany({where:{userEmail:usersEmail, TerminalId:entry.TerminalID}})
    let value1 = parse(entry.lastCommunication, 'MM/dd/yy HH:mm', new Date());
    let value2 = parse(filteredPosts.lastCommunication, 'MM/dd/yy HH:mm', new Date())
    let result = isEqual(value1,value2)
    if( filteredPosts && result && filteredPosts.TerminalID == entry.TerminalId ){
      console.log("before ", filteredPosts.lastCommunication,"postinfo");

      prisma.posts.update({  data:{cashBalance:entry.cashBalance},where: {TerminalId : entry.TerminalID}
      
    }).catch((err)=>{console.log(err)})  
    console.log("updated",entry);

    }
   

  })
console.log("-------------------------------------------------------------------")
  // console.log( await prisma.Posts.findMany(), "checking")
  console.log("-------------------------------------------------------------------")

  const refromattedPostSubmit =async(allPosts: any[])=>{

    console.log("Making Posts")
    const postsReformat = await allPosts.map((postsReformat: { TerminalId: any; Name: any; cashBalance: any; balType: any; estCashOut: number; lastCommunication: any; lastCashWD: any; rejectBalance: any; balanceAsOf: any; Cassette1: any; minReload: any; }) =>({
      TerminalID: `${postsReformat.TerminalId}`,
      Name:`${postsReformat.Name}`,
      cashBalance: `${postsReformat.cashBalance}`,
      balType:`${postsReformat.balType}`,
      estCashOut:`${Math.round(postsReformat.estCashOut)}`,
      lastCommunication:`${postsReformat.lastCommunication}`,
      lastCashWD:`${postsReformat.lastCashWD}`,
      rejectBalance:`${postsReformat.rejectBalance}`,
      balanceAsOf: `${postsReformat.balanceAsOf}`,
      Cassette1:`${postsReformat.Cassette1}`,
      minReload: `${postsReformat.minReload}`
    }));
  
    return postsReformat;
  
  }
  // console.log(await refromattedPostSubmit(allPosts),"-------------------------------------------------")
  // return res.json(await refromattedPostSubmit(allPosts)); 
}
// return allPosts;

return allPosts
    }



    export default columbusDataProcessing;