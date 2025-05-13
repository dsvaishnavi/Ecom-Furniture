const express = require("express");
const router = express.Router();
const authcontroller = require("../controllers/auth-controller");
const {
  signupValidation,
  signinValidation,
} = require("../Middleware/Validation");

router.post("/signup", signupValidation, authcontroller.signup);
router.post("/signIn", signinValidation, authcontroller.signIn);
router.post("/otp", authcontroller.verify_email); 
router.post("/resend-otp", authcontroller.resendOtp);
module.exports = router;
