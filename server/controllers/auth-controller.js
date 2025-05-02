const { Usermodel } = require("../models/SignupModel");
const bcrypt = require("bcrypt");

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
    Usermodel.password = await bcrypt.hash(password, 10);
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

// const signin = async (req, res) => {
//   try {
//     const { username, email, password } =
//       req.body;
//     const user = await Usermodel.findOne({ email });
//     const errorMsg ="wrong validation"
//     if (!user) {
//       return res
//         .status(403)
//         .json({ message: errorMsg, success: false });
//     }

//     const ispass =await bcrypt.compare(password,user.password);
//     if (!ispass){

//     }
//     const data = await Usermodel.create({
//       username,
//       password,
//       email,

//     });
//     Usermodel.password = await bcrypt.hash(password, 10);
//     await Usermodel.save();
//     console.log(username, password);
//     res.json({
//       message: "usersignup success",
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

module.exports = { signup };
