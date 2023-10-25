import columbusDataProcessing from "../excelProcessing";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("reloading");

  const express = require("express");
  const app = express();

  const cors = require("cors");
  require("dotenv").config();
  const schedule = require("node-schedule");

  let results = await columbusDataProcessing(req.body.email).catch((err) =>
    console.log(err)
  );

  res.status(200).json(results);
}
