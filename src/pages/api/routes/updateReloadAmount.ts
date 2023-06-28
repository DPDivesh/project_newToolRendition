import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../client.ts"



export default async function handler(req:NextApiRequest, res:NextApiResponse) {

//    await prisma.posts.findMany({where:{userEmail:req.email, TerminalId:entry.TerminalID}})
console.log(req.body,"request")
// let postToBeUpdated = await prisma.posts.findMany({where:{userEmail:req.body.email, TerminalId:req.body.TerminalID}})
// await prisma.posts.update({
//     minReload:req.body.minCash},{where: {TerminalId : req.body.TerminalID}})
   
    const updateUser = await prisma.user.update({
        where: {
          userEmail: req.body.email,
          TerminalId: req.body.TerminalID
        },
        data: {
          minReload: req.body.minCash,
        },
      })
      
      updateUser;
    res.status(200).json("working")

}