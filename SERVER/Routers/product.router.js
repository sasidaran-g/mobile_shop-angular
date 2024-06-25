var express = require("express");
var router = express.Router();
const errorHandler = require("../handler/error-handler/error.handler");
const {
  insertProduct,
  getProduct,
} = require("../Controllers/product-controller/product.controller");

router.post("/insertProduct", errorHandler(insertProduct));

router.get("/getProduct", errorHandler(getProduct));

module.exports = router;
