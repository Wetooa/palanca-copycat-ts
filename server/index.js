"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
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
app.get("/", (req, res) => {
    res.send("hello world2");
});
// run server
const port = process.env.PORT || 5000;
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // await connectDB(process.env.MONGO_URI)
        app.listen(port, () => console.log(`[server]: Server started on port ${port}...`));
    }
    catch (error) {
        console.log(error);
    }
});
start();
