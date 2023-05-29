import { Router } from "express";
import MainController from "../controllers/mainController.js";

const router = Router();

router.get("/", MainController.loadHomePage);

export default router;