import { Router } from "express";
import FileController from "../controllers/fileController.js";

const router = Router();

router.post("/upload", FileController.uploadFile);

export default router;