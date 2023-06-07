import { PrismaClient } from "@prisma/client";
import columbusDataProcessing from "../excelProcessing";
import { authOptions } from '../auth/[...nextauth]'
import { getServerSession } from "next-auth/next"


export default async function handler(req, res) {
  console.log("process file", req.body)

  
  const session = await getServerSession(req, res, authOptions)



      console.log("WTR")
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
  
      
      
        console.log("test");
       await columbusDataProcessing().catch((err)=>console.log(err))
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
      
      
      
        console.log("hi")
        const job = schedule.scheduleJob({hour:15,minute:48}, ()=>emailDatabaseUpdate());
        job
        // columbusDataProcessing();
      
      // process.exit()
      
      
      
      
      
      
      

   res.status(200).json({message: 'We did it'})
}







































// console.log(setInterval(processFile,9000));
// export default processFile;
