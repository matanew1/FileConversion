const { Router } = require("express");
const FileController = require("../controllers/fileController"); 

const multer = require("multer");
const upload = multer({ dest: 'uploads/' });

const router = Router();

router.post("/upload", upload.single("file"), FileController.uploadFile);

router.get("/download", FileController.downloadFile);

router.get('/download/:filename', FileController.downloadFileByFilename);

module.exports = router;
