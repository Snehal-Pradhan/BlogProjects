import { Router } from "express";
import express from "express";
import { aboutPage } from "../controllers/aboutController.mjs";

const router = express.Router();

router.get("/", aboutPage);

export default router;
