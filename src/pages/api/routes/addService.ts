import { NextApiRequest, NextApiResponse } from "next";
import prisma, { PrismaClient } from "@prisma/client";
import { fieldEncryptionMiddleware } from 'prisma-field-encryption'

import { useSession } from "next-auth/react";


export const client = new PrismaClient()

export default async function handler(req:NextApiRequest, res:NextApiResponse){

    // prisma.scrapeInfo.create({data:{
    //     cUserName:req,
    //     cPass:req
    //   }})  
const email:string = req.body.email
const user:string = req.body.user
const pass:string = req.body.pass 
const provider:string = req.body.provider

client.$use(fieldEncryptionMiddleware({
    encryptionKey: process.env.PRISMA_FIELD_ENCRYPTION
}))

await prisma.scrapeInfo.create({data:{
    email:email,
    cUserName:user,
    cPass:pass,
    provider:"columbus"
    }}).catch((error:any)=>console.log(error,"fail"))

console.log(req.body,"-------------------------")
    res.status(200).json("success")
}