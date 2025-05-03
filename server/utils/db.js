const mongoose = require("mongoose");
require("dotenv").config();

const URI = process.env.MONGO_URI;

const connectdb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("succes connection db.js");
  } catch (error) {
    console.log(error.message);
    process.exit(0);
  }
};

module.exports = connectdb;
