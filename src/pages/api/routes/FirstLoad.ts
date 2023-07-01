import { NextApiRequest, NextApiResponse } from "next"
import prisma from "../client"


export default async function handler(req:NextApiRequest,res:NextApiResponse){
//make a conditional that loads from xlsx file first and if that file doenst exist make a db request.
let initialLoad = await prisma.posts.findMany({where:{userEmail:req.body.email}})
// let useremail = req.body
   console.log("Initial")
res.status(200).json(initialLoad)
}


// {
//     "email": "diveshcodes@gmail.com"
//   }