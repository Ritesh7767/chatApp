import { Router } from "express";
import { getMessage, sendMessage } from "../controllers/message.controller";
import auth from "../middleware/auth.middleware";

const router = Router()

router.route("/").get(auth, getMessage).post(auth, sendMessage)

export default router