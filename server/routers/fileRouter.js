const { Router } = require("express");
const FileController = require("../controllers/fileController.js");

const router = Router();

router.post("/upload", FileController.uploadFile);

router.get("/download", FileController.downloadFile);

module.exports = router;