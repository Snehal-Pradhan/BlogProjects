import { Router } from "express";
import express from "express";
import { homePage } from "../controllers/homeController.mjs";

const router = express.Router();

router.get("/", homePage);

export default router;
