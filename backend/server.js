const express = require("express");
const app = express();
const cors = require("cors");
const { fetchTerms } = require("./routes/terms");

app.use(cors());
app.use(express.json());

app.post("/api/fetch-terms", fetchTerms);

app.listen(4000, () => {
  console.log("server listening");
});
