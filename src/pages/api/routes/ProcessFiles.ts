import columbusDataProcessing from "../excelProcessing";
import { authOptions } from '../auth/[...nextauth]'
import { getServerSession } from "next-auth/next"
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../client";

export default async function handler(req:NextApiRequest, res:NextApiResponse) {

  
  // const session = await getServerSession(req, res, authOptions)



      const express = require('express')
      const app = express();
      // const file = require("./columbusDownloader");
      
      const cors = require('cors');
      require("dotenv").config()
      const schedule = require('node-schedule');
      
      
      // const mongoose = require("mongoose");
      // const MachineData = require("./models/machine_info")
      // const machineModel = require("./models/machine_info");
      // const alerts = require("../frontend/src/alerts")
      
      // mongoose.connect("mongodb+srv://dpdivesh:v8TQbY57MKEOS3OF@cluster0.6fbfvci.mongodb.net/machine_info?retryWrites=true&w=majority",
      // {
      // useNewUrlParser: true,
      // }
      // )
      
      
      
        // let allPosts = await Posts.findAll({
        // })
        //delays for puppeteer 
  
      
      const scrapeInfo = await prisma.scrapeInfo.findMany({where:{email:req.body.email, provider:"columbus"}})

  

       let results = await columbusDataProcessing(req.body.email).catch((err)=>console.log(err))
      //  res.status(200).json({ name: 'John Doe' });

        // const refromattedPostSubmit =async(allPosts: any[])=>{
      
        //   console.log("Making Posts")
        //   const postsReformat = await allPosts.map(postsReformat =>({
        //     TerminalID: `${postsReformat.TerminalID}`,
        //     Name:`${postsReformat.Name}`,
        //     cashBalance: `${postsReformat.cashBalance}`,
        //     balType:`${postsReformat.balType}`,
        //     estCashOut:`${Math.round(postsReformat.estCashOut)}`,
        //     lastCommunication:`${postsReformat.lastCommunication}`,
        //     lastCashWD:`${postsReformat.lastCashWD}`,
        //     rejectBalance:`${postsReformat.rejectBalance}`,
        //     balanceAsOf: `${postsReformat.balanceAsOf}`,
        //     Cassette1:`${postsReformat.Cassette1}`,
        //     minReload: `${postsReformat.minReload}`
        //   }));
        
        //   return postsReformat;
        
        // }
      
      
      
        // console.log("hi")
        // const job = schedule.scheduleJob({hour:15,minute:48}, ()=>emailDatabaseUpdate());
        // job
        // columbusDataProcessing();
      
      // process.exit()
      
      
         res.status(200).json(results)

      
      
      
      

}







































// console.log(setInterval(processFile,9000));
// export default processFile;
