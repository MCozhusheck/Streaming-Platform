const express = require("express");
const userRouter = require("./routes/user");
const port = process.env.PORT;
require("./db/db");
const nms = require("./ServiceLiveStream");

const app = express();
app.use(express.json());
app.use(userRouter);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
  //nms.run();
});
