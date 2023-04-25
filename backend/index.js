// require("dotenv").config()
const cors = require("cors");

const express = require("express");

const app = express();

app.use(cors());
const userRouter = require("./users/user.router");
const commentsRouter = require("./comments/comments.router");

app.use(express.json());
app.use("/user", userRouter);
app.use("/comment", commentsRouter);

app.get("/", (req, res) => {
  res.send("Some message");
});

app.listen(process.env.PORT, () => {
  console.log("Server is running port:", process.env.PORT);
});
