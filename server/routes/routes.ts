import express from "express";
const router = express.Router();

import login from "../controllers/auth";
import { getPalanca, sendPalanca } from "../controllers/palanca";

router.route("/palanca/:value").get(getPalanca).post(sendPalanca);
router.route("/auth").post(login);

export default router;
