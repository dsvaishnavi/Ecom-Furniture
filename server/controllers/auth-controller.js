const { Usermodel } = require("../models/SignupModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  try {
    const { username, email, password, phone, address, city, pin, state } =
      req.body;
    // ----------------------------------------email exist or not
    const userExist = await Usermodel.findOne({ email,username });
    if (userExist) {
      return res
        .status(409)
        .json({ message: "user already exist", success: false });
    }

    const hashedPass = await bcrypt.hash(password, 10); //bcrypt make the password hash and secure.
    const data = await Usermodel.create({
      username,
      password: hashedPass,
      email,
      phone,
      address,
      city,
      pin,
      state,
    });

    await data.save();
    console.log(username, password);
    res.status(201).json({
      message: "User signup success",
      success: true,
    });
  } catch (error) {
    console.log("wrong");
  }
};
// -----------------------------------------------------------------signin----------------------------------------------------------------------

const signIn = async (req, res) => {
  try {
    const { email, password, username } = req.body;
    const user = await Usermodel.findOne({
    email,username
    });
    const errorMsg = "wrong in signin";
    if (!user) {
      return res.status(403).json({ message: errorMsg, success: false });
    }
    const ispassequal = await bcrypt.compare(password, user.password);
    if (!ispassequal) {
      return res.status(403).json({ message: errorMsg, success: false });
    }
    // const checkuser = await Usermodel.findOne({ username });
    // if (!checkuser) {
    //   return res.status(403).json({ message: errorMsg, success: false });
    // }

    // -----------------------------------------------------JWT TOKEN--------------------------------------------------------------------------------
    const jwtToken = jwt.sign(
      { email: user.email, _id: user._id }, //payload,secret_key,expiresIn
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    // -----------------------------------------------------------------------------------------------------------------------------------------------

    res.status(200).json({
      message: "signIN successfull",
      success: true,
      jwtToken,
      email: user.email,
      username: user.username,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { signup, signIn };
