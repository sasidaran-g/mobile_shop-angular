const express = require("express");
const router = express.Router();
const errorHandler = require("../handler/error-handler/error.handler");

const {
  register,
} = require("../Controllers/login-controller/login.controller");

// router.post("/getLogin", errorHandler(getLogin));

router.post("/register", errorHandler(register));
module.exports = router;
