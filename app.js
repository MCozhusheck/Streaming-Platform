const express = require("express");
const app = express();
const port = 3001;
const nms = require("./ServiceLiveStream");

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
  nms.run();
});
