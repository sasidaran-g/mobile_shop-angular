var express = require("express");
var router = express.Router();
const errorHandler = require("../handler/error-handler/error.handler");
const {
  insertCustomer,getCustomer
} = require("../Controllers/customer-controller/customer.controller");

router.post("/insertCustomer", errorHandler(insertCustomer));

router.get("/getCustomer", errorHandler(getCustomer));

module.exports = router;
