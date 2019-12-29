const express = require("express");
const userRouter = require("./routes/user");
const port = process.env.PORT;
require("./db/db");
const nms = require("./ServiceLiveStream");
const fileUpload = require("express-fileupload");

const app = express();
app.use(express.json());
app.use(userRouter);
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
    debug: true
  })
);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
  //nms.run();
});
