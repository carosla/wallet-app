const express = require("express");
const { registrar, login } = require("./authController");

const router = express.Router();

router.post("/register", registrar);
router.post("/login", login);

module.exports = router;
