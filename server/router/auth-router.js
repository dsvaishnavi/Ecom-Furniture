const express = require("express");
const router = express.Router();
const authcontroller = require("../controllers/auth-controller");

router.route("/").get(authcontroller.home);
router.route("/signup").post(authcontroller.signup);

module.exports = router;
