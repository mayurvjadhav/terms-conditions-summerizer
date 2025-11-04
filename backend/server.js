const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.post("/api/fetch-terms", async (req, res) => {
  try {
    const { url } = req.body;
    console.log(url);

    const response = await axios.get(url);

    const $ = cheerio.load(response.data);

    $("script").remove();
    $("style").remove();

    let bodyText = $("body").text();

    bodyText = bodyText.replace(/\s+/g, " ").trim();

    res.json({
      success: true,
      content: bodyText,
      url: url,
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

app.listen(4000, () => {
  console.log("server listening");
});
