const express = require("express");
const router = express.Router();
const aiController = require("../controllers/ai.controller");

//api to get response
router.get("/get-response", aiController.getResponse);

module.exports = router;
