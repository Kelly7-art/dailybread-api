// /api/verse.js
export default async function handler(req, res) {
  try {
    const apiUrl = "http://beta.ourmanna.com/api/v1/get?format=json";

    // Use global fetch (Vercel Node 18+ supports this)
    const response = await fetch(apiUrl);
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch verse" });
  }
}
