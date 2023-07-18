import { NextApiRequest, NextApiResponse } from "next"
import prisma from "../client"


export default async function handler(req:NextApiRequest,res:NextApiResponse){
//make a conditional that loads from xlsx file first and if that file doenst exist make a db request.
let currentServices = await prisma.scrapeInfo.findMany({where:{email:req.body.email}})
res.status(200).json(currentServices)
}

