var express = require("express");
var router = express.Router();
const errorHandler = require("../handler/error-handler/error.handler");
const {
  getCategory,
  getCompany,
  getmyProduct,
  getSelectedProduct,
  insertOrder,
  getOrder,
  getOrderDetials,
} = require("../Controllers/order-controller/order.controller");

router.get("/getCategory", errorHandler(getCategory));

router.get("/getCompany/:id", errorHandler(getCompany));

router.get("/getmyProduct/:id", errorHandler(getmyProduct));

router.get("/getSelectedProduct/:id", errorHandler(getSelectedProduct));

router.post("/insertOrder", errorHandler(insertOrder));

router.get("/getOrder/:id", errorHandler(getOrder));

router.get("/getOrderDetials/:id", errorHandler(getOrderDetials));

module.exports = router;
