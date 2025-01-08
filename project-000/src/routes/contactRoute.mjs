import { Router } from "express";
import express from "express";
import { contactPage } from "../controllers/contactController.mjs";

const router = express.Router();

router.get("/", contactPage);

export default router;
