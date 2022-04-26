const express = require("express"),
  app = express(),
  path = require("path");

const port = process.env.YOUR_PORT || process.env.PORT || 8080;
const flag = "flag{stop_h4te_me}"

app.get("/", (req, res) => {
  if (req.url === "/?user=tOPuSerName&password=topPassWORd") {
    res.send(flag);
  } else {
    res.sendFile(__dirname + "/public/" + "index.html");
  }
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/index.php~", (req, res) => {
  res.download(__dirname + "/" + "index.php_");
});

app.listen(port, () => {
  console.log(`Start on port:${port}`);
});
