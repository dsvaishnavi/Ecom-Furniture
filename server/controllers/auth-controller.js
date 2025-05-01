// home page

const { Usermodel } = require("../models/SignupModel");

const home = async (req, res) => {
  try {
    res.status(200).json("welcome using router and controller home");
  } catch (error) {
    console.log(error.message);
  }
};

const signup = async (req, res) => {
  try {
    const { username, email, password, phone, address, city, pin, country } =
      req.body;
    const data = await Usermodel.create({
      username,
      password,
      email,
      phone,
      address,
      city,
      pin,
      country,
    });
    // console.log(username, password);
    res.json({
      message: "usersignup",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { home, signup };
