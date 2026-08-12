const express = require("express");
const aiRoutes = require("./routes/ai.routes");

const app = express(); //here server is created not starts

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/ai", aiRoutes);

module.exports = app;
