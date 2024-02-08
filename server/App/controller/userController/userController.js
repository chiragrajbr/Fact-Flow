const { users } = require("../../module/user/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userController = {};

userController.register = async (req, res) => {
  try {
    const body = req.body;
    const exitUser = await users.findOne({ email: body.email });
    if (exitUser) {
      res.json({
        error: "user already exist",
      });
    } else {
      const newUser = new users(body);
      const salt = await bcrypt.genSalt();
      const encrypted = await bcrypt.hash(newUser.password, salt);
      newUser.password = encrypted;
      const data = await newUser.save();
      res.json(data);
    }
  } catch (e) {
    res.json({
      error: e.message,
    });
  }
};

userController.login = (req, res) => {
  const body = req.body;
  users
    .findOne({ email: body.email })
    .then(async (user) => {
      const verifypass = await bcrypt.compare(body.password, user.password);
      if (!verifypass) {
        res.json({ error: "incorrect password/email not match" });
      } else {
        const token = {
          user_Id: user.id,
          username: user.userName,
          email: user.email,
        };
        const gentoken = jwt.sign(token, "C123");
        res.send({
          token: gentoken,
        });
      }
    })
    .catch((e) => {
      res.status(401).json({
        error: e.message,
      });
    });
};

userController.alluser = (req, res) => {
  const data = req.user;
  user
    .find({ userId: data.user_Id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json({ error: err });
    });
};

module.exports = { userController };
