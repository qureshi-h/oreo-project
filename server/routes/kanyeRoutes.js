var express = require("express");
var router = express.Router();

const kanyeController = require("../controllers/kanyeController");

router.post("/addSubscriber/", kanyeController.addSubscriber);

module.exports = router;
