import express from "express";
import { Router } from "express";
import fs from "fs";

const router = express.Router();
router.get("/", (req, res) => {
  fs.readFile();
});
