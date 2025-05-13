const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  pin: {
    type: Number,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  isVerified:{
    type:Boolean,
    default : false
  },
  isAdmin:{
    type:Boolean,
    default:false
  },
  otp:{
    type: String
  },
  otpExpires:{
    type: Date
  },
  date:{
    type:Date,
    default:Date.now
  }
},{timestamps:true});

const Usermodel = mongoose.model("User", User);
module.exports = { Usermodel };
