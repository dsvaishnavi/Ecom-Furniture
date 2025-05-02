const { Usermodel } = require("../models/SignupModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  try {
    const { username, email, password, phone, address, city, pin, state } =
      req.body;
    const user = await Usermodel.findOne({ email });
    if (user) {
      return res
        .status(409)
        .json({ message: "user already exist", success: false });
    }
    const data = await Usermodel.create({
      username,
      password,
      email,
      phone,
      address,
      city,
      pin,
      state,
    });
    data.password = await bcrypt.hash(password, 10);
    await Usermodel.save();
    console.log(username, password);
    res.json({
      message: "usersignup success",
    });
  } catch (error) {
    console.log(error);
  }
};
// -----------------------------------------------------------------signin----------------------------------------------------------------------

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Usermodel.findOne({ email });
    const errorMsg = "wrong validation";
    if (!user) {
      return res.status(403).json({ message: errorMsg, success: false });
    }
    const isSame = await bcrypt.compare(password, user.password); //password is from client and user.pass from database

    if (!isSame) {
      return res.status(403).json({ message: errorMsg, success: false });
    }

    // -----------------------------------------------------JWT TOKEN--------------------------------------------------------------------------------
    const jwtToken = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    // -----------------------------------------------------------------------------------------------------------------------------------------------

    res.status(200).json({
      message: "signIN successfull",
      success: true,
      jwtToken,
      email,
      name: user.username,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { signup, signin };
