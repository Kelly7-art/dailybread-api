
import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    // OurManna HTTP API
    const apiUrl = "http://beta.ourmanna.com/api/v1/get?format=json";

    // Fetch the daily verse
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Return JSON via HTTPS
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch verse" });
  }
}
