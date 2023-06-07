import { getServerSession } from 'next-auth';
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  try {
    await getServerSession({ req, res }, authOptions);

    const session = req.session;

    if (!session) {
      res.setHeader('Content-Type', 'application/json');
      res.status(401).json({ message: "You must be logged in." });
      return;
    }

    console.log(session); // The session object

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({ message: 'Success' });
  } catch (error) {
    console.error(error);
    res.setHeader('Content-Type', 'application/json');
    res.status(500).json({ message: 'Request failed', session});
  }
}
