const express = require("express"),
  app = express();

const port = process.env.YOUR_PORT || process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/" + "index.html");
});

app.get("/index.php~", (req, res) => {
  res.download(__dirname + "/" + "index.php_");
});

app.listen(port, () => {
  console.log(`Start on port:${port}`);
});
