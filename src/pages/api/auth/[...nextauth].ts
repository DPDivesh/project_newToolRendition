import GoogleProvider from "next-auth/providers/google"
import NextAuth, { NextAuthOptions } from "next-auth"
import { PrismaClient} from "@prisma/client"
import {PrismaAdapter} from "@next-auth/prisma-adapter"
const prisma = new PrismaClient;

export const authOptions:NextAuthOptions = {

  // Configure one or more authentication providers
  adapter:PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      //ts-ignore
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,

    })
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)