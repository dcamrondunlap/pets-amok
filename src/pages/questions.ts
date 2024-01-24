import { NextApiResponse } from "next";

export default async function handler(req: NextApiResponse, res: NextApiResponse) {
  try {
    const response = await fetch('http://localhost:9001/api/questions');

    if (!response.ok) {
      throw new Error(`Failed to fetch questions: ${response.statusText}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
