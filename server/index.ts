require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

// security packages
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");

// connect database
const connectDB = require("./config/db");

// require middleware

// authentication middleware

// routes
app.get("/", (req: any, res: any) => {
  res.send("hello world2");
});

// run server
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    // await connectDB(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`[server]: Server started on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
