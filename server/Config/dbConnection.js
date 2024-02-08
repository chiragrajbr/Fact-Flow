const mongoose = require("mongoose");
const dbConnection = async () => {
  const connect = await mongoose.connect("mongodb://0.0.0.0/factFlow");
  if (connect) console.log("db connected succesfully");
  else console.log("db  not connected ");
};
module.exports = { dbConnection };
