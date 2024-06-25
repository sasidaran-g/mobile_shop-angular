var express = require("express");
var router = express.Router();
const errorHandler = require("../handler/error-handler/error.handler");
const {
  getAdmin,
  getAdminOrder,
  insertStatus,
  getDeliver,
  adminRegister,
  getAdminLogin,
} = require("../Controllers/admin-controller/admin.controller");

router.get("/getAdmin", errorHandler(getAdmin));

router.get("/getAdminOrder/:id", errorHandler(getAdminOrder));

router.post("/insertStatus/:id", errorHandler(insertStatus));

router.get("/getDeliver", errorHandler(getDeliver));

router.post("/registerAdmin", errorHandler(adminRegister));

router.post("/getAdminLogin", errorHandler(getAdminLogin));

module.exports = router;
