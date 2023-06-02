const { Router } = require("express");
const FileController = require("../controllers/fileController.js");

const router = Router();

router.post("/upload", FileController.uploadFile);

router.post("/download/:id", FileController.downloadFile);

module.exports = router;