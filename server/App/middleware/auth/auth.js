const auth = {};
const { users } = require("../../module/user/user");
const jwt = require("jsonwebtoken");

auth.verify = (req, res, next) => {
  const token = req.headers.authorization;
  let tokendata;
  try {
    tokendata = jwt.verify(token, "C123");
    users
      .find({ email: tokendata.email })
      .then(() => {
        req.user = tokendata;
        next();
      })
      .catch((err) => {
        res.json(err);
      });
  } catch (err) {
    res.json(err);
  }
};
module.exports = { auth };
