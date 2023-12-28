const mongoose = require("mongoose");
const isEmail =require("validator/lib/isEmail")
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
    validate: function (value) {
      return isEmail(value); 
    },
    message: function () {
      return "enter proper email format";
    },
  },
  password: {
    type: String,
    required: [true, "password is required"],
    min: 3,
    max: 9,
  },
});



const userModel = mongoose.model("userModel", userSchema);
module.exports = userModel;
