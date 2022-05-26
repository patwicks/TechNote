const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookie = require("cookie-parser");
//model
const User = require("../models/model.user");
//validator
const { authValidator } = require("../validators/validator.user");

//others
const expiration = 1 * 24 * 60 * 60;
function createToken(id, secret) {
  return jwt.sign({ id }, secret, { expiresIn: expiration });
}

//Regsiter a user
const REGISTER_USER = async (req, res) => {
  try {
    const { username, password } = req.body;
    //validate the request
    const { error } = authValidator(req.body);
    //check if username is existing
    const checkUsername = await User.findOne({ username });
    //hashing password
    const salt = await bcrypt.genSalt(10);
    const newPass = await bcrypt.hash(password, salt);

    if (error) {
      res.status(400).json({ errorMessage: error.details[0].message });
    } else if (checkUsername) {
      res.status(400).json({ errorMessage: "Username is already existing!" });
    } else {
      //create new user
      const newUser = new User({
        username,
        password: newPass,
      });
      //save user
      const saveNewUser = await newUser.save();

      if (saveNewUser) {
        res
          .status(200)
          .json({ successMessage: "Successfully registered, login now!" });
      } else {
        res.status(400).json({ errorMessage: "Failed to register!" });
      }
    }
  } catch (error) {
    res.status(200).json({
      errorMessage: "Something went wrong on registering, try again!",
    });
  }
};
//login a user
const LOGIN_USER = async (req, res) => {
  try {
    const { username, password } = req.body;
    //validate request
    const { error } = authValidator(req.body);
    //check if email is exist
    const checkUsername = await User.findOne({ username });
    //check if password is valid
    const isValid = await bcrypt.compare(password, checkUsername.password);

    if (error) {
      res.status(400).json({ errorMessage: error.details[0].message });
    } else if (!checkUsername) {
      res.status(400).json({ errorMessage: "Invalid username or password!" });
    } else if (!isValid) {
      res.status(400).json({ errorMessage: "Invalid username or password!" });
    } else {
      //assign a token and save it to browser cookie
      const cookie = createToken(checkUsername._id, process.env.TOKEN_SECRET);
      res.cookie("token", cookie, {
        httpOnly: true,
        maxAge: expiration * 1000,
      });
      res.status(201).json(checkUsername);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      errorMessage: "Something went wrong while logging in, try again!",
    });
  }
};
//autologin a user
//Edit user details
//logout a user

module.exports = {
  REGISTER_USER,
  LOGIN_USER,
};
