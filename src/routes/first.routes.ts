import { Router } from "express";
import { first } from "@/controllers/first.controller";

const router=Router()
router.get('/first',first)
export default router