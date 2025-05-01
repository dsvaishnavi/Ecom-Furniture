const mongoose = require("mongoose");

const URI =
  "mongodb+srv://vaishnavidhawade5:sIDQFFe1JQhmDfOd@cluster0.m6i50av.mongodb.net/furniture?retryWrites=true&w=majority&appName=Cluster0";

// mongoose.connect(URI)

const connectdb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("succes connection");
  } catch (error) {
    console.log(error.message);
    process.exit(0);
  }
};

module.exports = connectdb;
