var express = require("express");
var router = express.Router();
const errorHandler = require("../handler/error-handler/error.handler");
const {
  insertSupp,
  getSupplier,
} = require("../Controllers/supplier-controller/supplier.controller");

router.post("/insertSupplier", errorHandler(insertSupp));

router.get("/getSupplier", errorHandler(getSupplier));

module.exports = router;
