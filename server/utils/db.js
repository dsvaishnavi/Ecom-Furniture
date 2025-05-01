const mongoose = require("mongoose");

const URI =
  " mongodb+srv://user:mernstack@ecom.r8wz0.mongodb.net/?retryWrites=true&w=majority&appName=ecom";
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
