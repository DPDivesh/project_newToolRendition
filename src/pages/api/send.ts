import type { NextApiRequest, NextApiResponse } from "next";
import { Email } from "../components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Extract parameters from the request body
    const { email, subject, text } = req.body;

    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: subject,
      react: Email({ firstName: "John", url: text }),
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
