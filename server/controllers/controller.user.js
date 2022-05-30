const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookie = require("cookie-parser");
//model
const User = require("../models/model.user");
//validator
const {
  userRequestValicator,
  usernameValidator,
  passwordValidator,
} = require("../validators/validator.user");

//others
const expiration = 1 * 24 * 60 * 60;
function createToken(id, secret) {
  return jwt.sign({ id }, secret, { expiresIn: expiration });
}

//Regsiter a user
exports.REGISTER_USER = async (req, res) => {
  try {
    const { username, password } = req.body;
    //validate the request
    const { error } = userRequestValicator(req.body);
    //check if username is existing
    const user = await User.findOne({ username });
    //hashing password
    const salt = await bcrypt.genSalt(10);
    const newPass = await bcrypt.hash(password, salt);

    if (error) {
      return res.status(400).json({ errorMessage: error.details[0].message });
    } else if (user) {
      return res
        .status(400)
        .json({ errorMessage: "Username is already existing!" });
    } else {
      //create new user
      const newUser = new User({
        username,
        password: newPass,
      });
      //save user
      const saveNewUser = await newUser.save();

      if (saveNewUser) {
        return res
          .status(200)
          .json({ successMessage: "Successfully registered, login now!" });
      } else {
        return res.status(400).json({ errorMessage: "Failed to register!" });
      }
    }
  } catch (error) {
    console.log(error.message);
    return res.status(200).json({
      errorMessage: "Something went wrong on registering, try again!",
    });
  }
};
//login a user
exports.LOGIN_USER = async (req, res) => {
  try {
    const { username, password } = req.body;
    //validate request
    const { error } = userRequestValicator(req.body);
    //check if email is exist
    const user = await User.findOne({ username });

    if (error) {
      return res.status(400).json({ errorMessage: error.details[0].message });
    } else if (!user) {
      return res
        .status(400)
        .json({ errorMessage: "Invalid username or password!" });
    } else {
      //check if password is valid
      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) {
        return res
          .status(400)
          .json({ errorMessage: "Invalid username or password!" });
      } else {
        //assign a token and save it to browser cookies
        const token = createToken(user._id, process.env.TOKEN_SECRET);

        res.cookie("token", token, {
          httpOnly: true,
          maxAge: expiration * 1000,
          secure: true,
          sameSite: "none",
        });

        res.status(200).json({ successMessage: "Successfully login", user });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      errorMessage: "Something went wrong while logging in, try again!",
    });
  }
};
//autologin a user
exports.AUTO_LOGIN = async (req, res) => {
  //this functions is not returning any error
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(200).json({ isLogin: false, user: null });
    } else {
      const { id } = jwt.verify(token, process.env.TOKEN_SECRET);
      const user = await User.findById(id);
      return res.status(200).json({ isLogin: true, user });
    }
  } catch (error) {
    console.log(error);
    return res.status(200).json({ isLogin: false, user: null });
  }
};
//Change username
exports.CHANGE_USERNAME = async (req, res) => {
  try {
    const { username } = req.body;
    //validate request data
    const { error } = usernameValidator(req.body);
    const user = await User.findById(req.params.id);

    if (error) {
      return res.status(400).json({ errorMessage: error.details[0].message });
    } else {
      //check username
      const usernameExist = await User.findOne({ username });
      if (username === user.username) {
        return res
          .status(400)
          .json({ errorMessage: "Choose another username!" });
      } else if (usernameExist) {
        return res
          .status(400)
          .json({ errorMessage: "Username is already exist!" });
      } else {
        //change the username
        const changeUsername = await User.findByIdAndUpdate(req.params.id, {
          username,
        });
        if (changeUsername) {
          return res
            .status(200)
            .json({ successMessage: "Username successfully updated!" });
        } else {
          return res
            .status(400)
            .json({ errorMessage: "Failed to update username!" });
        }
      }
    }
  } catch (error) {
    console.log(error.message);
    return res
      .status(400)
      .json({ errorMessage: "Something went wrong while updating username!" });
  }
};
//Change password
exports.CHANGE_PASSWORD = async (req, res) => {
  try {
    const { password } = req.body;
    //request validator
    const { error } = passwordValidator(req.body);
    if (error) {
      return res.status(400).json({ errorMessage: error.details[0].message });
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(password, salt);
      const changePass = await User.findByIdAndUpdate(req.params.id, {
        password: hashedPass,
      });

      if (changePass) {
        return res
          .status(200)
          .json({ successMessage: "Password successfully updated!" });
      } else {
        return res
          .status(400)
          .json({ errorMessage: "Failed to change password!" });
      }
    }
  } catch (error) {
    console.lg(error.message);
    return res
      .status(400)
      .json({ errorMessage: "Something went wrong while updating password" });
  }
};
//logout a user
exports.LOGOUT_USER = async (req, res) => {
  try {
    res.cookie("token", "", { maxAge: 1 });
    res.json({ successMessage: "You have been logout!" });
  } catch (error) {
    console.log(error.message);
  }
};
