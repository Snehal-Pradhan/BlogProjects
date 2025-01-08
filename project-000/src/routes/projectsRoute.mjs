import { Router } from "express";
import express from "express";
import { projectsPage } from "../controllers/projectsController.mjs";

const router = express.Router();

router.get("/", projectsPage);

export default router;
