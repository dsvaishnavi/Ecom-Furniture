const { Usermodel } = require("../models/SignupModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { sendEmail } = require("../utils/mail"); // ✅ fix import

const signup = async (req, res) => {
  try {
    const { username, email, password, phone, address, city, pin, state } = req.body;

    const verifycode = Math.floor(100000 + Math.random() * 900000).toString();

    const userExist = await Usermodel.findOne({
      $or: [{ email }, { username }],
    });

    if (userExist) {
      return res.status(409).json({ message: "User already exists", success: false });
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const otpExpires = new Date(Date.now() + 5 * 60 * 1000); // expires in 5 minutes

    const newUser = new Usermodel({
      username,
      email,
      password: hashedPass,
      phone,
      address,
      city,
      pin,
      state,
      otp: verifycode,
      otpExpires,
    });

    await newUser.save();
    // In your signup function, update the email sending part:
    await sendEmail(
      email,
      "Verify Your UrbanNest Account",
      `Your OTP is: ${verifycode}`,
      `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #917337;">Welcome to UrbanNest!</h2>
        <p>Thank you for signing up. Please verify your email address by entering the following OTP:</p>
        <div style="background: #f5e8d0; padding: 10px; text-align: center; margin: 20px 0;">
          <h1 style="margin: 0; letter-spacing: 3px;">${verifycode}</h1>
        </div>
        <p>This OTP will expire in 5 minutes.</p>
        <p>If you didn't request this, please ignore this email.</p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
        <p style="font-size: 12px; color: #777;">UrbanNest - Your perfect home destination</p>
      </div>
      `
    );
    return res.status(201).json({
      message: "User signed up successfully. Please verify your email.",
      success: true,
    });

  } catch (error) {
    console.error("Signup Error:", error);
    return res.status(500).json({ success: false, message: "Signup failed" });
  }
};

const verify_email = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const user = await Usermodel.findOne({ email });

    if (!user) {
      return res.status(400).json({ success: false, message: "User not found" });
    }

    const isCodeValid = user.otp === otp;
    const isNotExpired = user.otpExpires && user.otpExpires > new Date();

    if (isCodeValid && isNotExpired) {
      user.isVerified = true;
      user.otp = null;
      user.otpExpires = null;
      await user.save();

      const jwtToken = jwt.sign(
        { email: user.email, _id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
      );

      return res.status(200).json({
        success: true,
        message: "Email verified successfully",
        jwtToken,
        email: user.email,
      });
    } else if (!isCodeValid) {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    } else {
      return res.status(400).json({ success: false, message: "OTP Expired" });
    }

  } catch (error) {
    console.error("Verify Email Error:", error);
    return res.status(500).json({ success: false, message: "Error verifying email" });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const user = await Usermodel.findOne({ email, username });

    if (!user) {
      return res.status(403).json({ message: "Wrong credentials", success: false });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(403).json({ message: "Wrong credentials", success: false });
    }

    const jwtToken = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.status(200).json({
      message: "SignIn successful",
      success: true,
      jwtToken,
      email: user.email,
      username: user.username,
    });

  } catch (error) {
    console.error("SignIn Error:", error);
    return res.status(500).json({ success: false, message: "Login failed" });
  }
};

const resendOtp = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await Usermodel.findOne({ email });

    if (!user) {
      return res.status(400).json({ success: false, message: "User not found" });
    }

    const verifycode = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpires = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes

    user.otp = verifycode;
    user.otpExpires = otpExpires;
    await user.save();

    await sendEmail(email, "New OTP Verification", "", `<p>Your new OTP is: <strong>${verifycode}</strong></p>`);

    return res.status(200).json({
      success: true,
      message: "New OTP sent successfully",
    });
  } catch (error) {
    console.error("Resend OTP Error:", error);
    return res.status(500).json({ success: false, message: "Error resending OTP" });
  }
};

// Don't forget to add it to your exports
module.exports = { signup, signIn, verify_email, resendOtp };