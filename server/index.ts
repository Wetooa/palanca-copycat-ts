require("dotenv").config();
require("express-async-errors");

import express, { Request, Response } from "express";
const app = express();

// security packages
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");
const passport = require("passport");

// connect database
const connectDB = require("./config/db");

// require middleware
import { notFound } from "./middleware/notFoundMiddleware";
const errorHandler = require("./middleware/errorHandlerMiddleware");

// routes
import router from "./routes/routes";
require("./middleware/authenticationMiddleware");
app.use("/api/v1/", router);

app.get("/auth/google", (req: Request, res: any) => {
  passport.authenticate("google", { scope: ["email", "profile"] });
});

app.use(notFound);
app.use(errorHandler);

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
