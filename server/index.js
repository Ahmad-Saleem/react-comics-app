const fetch = require("node-fetch");
const express = require("express");
const app = express();

const cors = require("cors");
const port = 4000;

app.use(cors());

app.get("/comics/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const url =
      id === "current"
        ? `https://xkcd.com/info.0.json`
        : `https://xkcd.com/${id}/info.0.json`;
    const response = await fetch(url);
    const result = await response.json();
    res.status(200).json({
      ...result,
      id,
    });
  } catch (err) {
    res.status(404).json({});
  }
});

app.listen(port, () => {
  console.log(`start server on http://localhost:${port}`);
});
