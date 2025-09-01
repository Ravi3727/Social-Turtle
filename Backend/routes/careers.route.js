import express from "express";
import { applyForJob } from "../Controllers/careers.controller.js";
import upload from "../middleware/upload.js";


const router = express.Router();

// POST route for applying to a job
router.post("/apply", upload.single("cv"), applyForJob);

export default router;
