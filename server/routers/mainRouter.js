const { Router } = require("express");
const MainController = require("../controllers/mainController.js");

const router = Router();

router.get("/", MainController.loadHomePage);

module.exports = router;