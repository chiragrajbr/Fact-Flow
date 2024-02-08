const auth = {};
const { user } = require("../../module/user/user");
const jwt = require("jsonwebtoken");

auth.verify = async (req, res, next) => {
  const token = req.headers.authorization;
  let tokendata;

  try {
    tokendata = await jwt.verify(token, "C123");
    user
      .find({ email: tokendata.email })
      .then(() => {
        req.user = tokendata;
        next();
      })
      .catch((err) => {
        res, json(err);
      });
  } catch (err) {
    res.json(err);
  }
};
module.exports = { auth };
