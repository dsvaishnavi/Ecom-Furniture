const Joi = require("joi");

const signupValidation = (req, res, next) => {
  const Schema = Joi.object({
    username: Joi.string().min(4).max(10).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(20).required(),
    phone: Joi.string()
      .pattern(/^[6-9]\d{9}$/)
      .required(),
    address: Joi.string()
      // .pattern(/^[a-zA-Z0-9\s,\/\-#]+$/)
      .required(),
    city: Joi.string().min(4).max(16).required(),

    // for pincode
    // ^[1-9] → First digit must be from 1 to 9 (no leading zero).
    // [0-9]{5} → Followed by exactly 5 digits.
    // Total: 6 digits
    pin: Joi.string()
      .pattern(/^[1-9][0-9]{5}$/)
      .required(),
    state: Joi.string().required(),
  });

  const { error } = Schema.validate(req.body);
  if (error) {
    console.log("Validation error:", error.details);
    return res
      .status(400)
      .json({ message: "Bad request", error: error.details });
  } else {
    next();
  }
};

const signinValidation = (req, res, next) => {
  const Schema = Joi.object({
    username: Joi.string().min(4).max(10).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(20).required(),
  });

  const { error } = Schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: "Bad request", error });
  }
  next();
};

module.exports = {
  signupValidation,
  signinValidation,
};
