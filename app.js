const express = require("express");
const userRouter = require("./routes/user");
const port = process.env.PORT;
require("./db/db");
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
