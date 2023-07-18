import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../client.ts"
import axios from "axios";

export default async function handler(req:NextApiRequest, res:NextApiResponse) {

//    await prisma.posts.findMany({where:{userEmail:req.email, TerminalId:entry.TerminalID}})
// let postToBeUpdated = await prisma.posts.findMany({where:{userEmail:req.body.email, TerminalId:req.body.TerminalID}})
// await prisma.posts.update({
//     minReload:req.body.minCash},{where: {TerminalId : req.body.TerminalID}})

   let usersEmail:any = req.body.email!
    const updateUser = await prisma.posts.updateMany({
        where: {
          TerminalId: req.body.TerminalID,
         AND:[{userEmail: usersEmail}]
        },
        data: {
          minReload: req.body.minCash,
        },
        
      }).catch((err)=>{console.log(err)})
      const data=await axios.post('http://localhost:3000/api/routes/FirstLoad', {
        email:`${req.body.email}`
      }).catch((error)=>{
        console.log(error, "error at first load");
      });
      
      
      updateUser;
    res.status(200).json("working")

}