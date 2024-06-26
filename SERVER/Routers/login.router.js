const express = require("express");
const router = express.Router();
const errorHandler = require("../handler/error-handler/error.handler");

const {
  userLogin,
  register,
} = require("../Controllers/login-controller/login.controller");

// router.post("/getLogin", errorHandler(getLogin));
router.get("/userLogin", errorHandler(userLogin));

router.post("/register", errorHandler(register));
module.exports = router;
