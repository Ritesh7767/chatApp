import { Router } from "express";
import { getMessage, sendMessage } from "../controllers/message.controller";

const router = Router()

router.route("/").get(getMessage).post(sendMessage)

export default router