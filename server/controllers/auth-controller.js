// home page

const home = async (req, res) => {
  try {
    res.status(200).json("welcome using router and controller home");
  } catch (error) {
    console.log(error.message);
  }
};

const signup = async (req, res) => {
  try {
    res.status(200).json({ message: req.body });
  } catch (error) {
    console.log("error");
  }
};

module.exports = { home, signup };
