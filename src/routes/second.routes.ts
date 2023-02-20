import { Router } from "express";
import { second } from "../controllers/second.controller";

const router=Router()
router.get('/first',second)
export default router