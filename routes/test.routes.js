import { Router } from "express";
import { postTest, putTest } from "../controllers/test.controller.js";

const router = Router()

router.post('/hi', postTest)
router.put('/hi', putTest)

export default router