import type { NextApiRequest, NextApiResponse } from "next";
import { Email } from "../components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["diveshpatel39@gmail.com"],
      subject: "Hello world",
      react: Email({ firstName: "John", url: "https://www.google.com/" }),
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
