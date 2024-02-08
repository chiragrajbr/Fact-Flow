const mongoose = require("mongoose");
const isEmail = require("validator/lib/isEmail");

const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "username is required"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "email is required"],
    validate: {
      validator: function (value) {
        return isEmail(value);
      },
      message: function () {
        return "Enter proper Email";
      },
    },
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
});

const users = mongoose.model("users", userSchema);
module.exports = { users };
