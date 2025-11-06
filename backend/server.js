const env = require("dotenv");
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const app = express();
const cors = require("cors");
const { GoogleGenAI } = require("@google/genai");

env.config();
app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI(process.env.GEMINI_API_KEY);

app.post("/api/fetch-terms", async (req, res) => {
  try {
    const { url } = req.body;

    if (!url.startsWith("http")) {
      url = "https://" + url;
    }

    console.log("Fetching:", url);

    const response = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
      timeout: 10000, // 10 second timeout
    });

    console.log("Fetch successful, status:", response.status);

    const $ = cheerio.load(response.data);
    $("script").remove();
    $("style").remove();

    let bodyText = $("body").text();

    bodyText = bodyText.replace(/\s+/g, " ").trim();

    console.log("Text length:", bodyText.length);

    const modelResponse = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Summarize the following Terms & Conditions document into 5–10 short key points (under 6 words each), TL;DR style and explain to user in easier way using why? when? where? if necessary.
      Focus on real impacts: data use/sharing, rights granted, liability limits, auto-renewal/cancellation, jurisdiction, account deletion, or changes to terms.
      Exclude basic info like “you must be 18” or “follow laws.”
      Each item must include a color tag:
      "red" → harmful or risky for users
      "gray" → neutral or standard
      "green" → beneficial or protective for users
      please make it easier to read for a general audience.
      Use the website’s actual name where relevant (e.g., say “Google” instead of “the service”), but not in every point.
      Output raw JSON only, no markdown, no backticks, no code tags, and no escape characters.
      if you can not find the terms & conditions, respond with an error message.
      Format:
      [{ "point": "No terms found, please try again", "color": "yellow" }]

      :\n\n${bodyText}`,
    });
    const summery = modelResponse.text;

    const cleanedSummary = JSON.parse(summery);

    res.json({
      success: true,
      url: url,
      summery: cleanedSummary,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

app.listen(4000, () => {
  console.log("server listening");
});
