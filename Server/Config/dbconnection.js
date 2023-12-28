const mongoose = require("mongoose");

const dbconnection = () => {
  mongoose
    .connect("mongodb://0.0.0.0:27017/current")
    .then(() => {
      console.log("database connected successfully");
    })
    .catch(() => {
      console.log("database not connected");
    });
};
module.exports = dbconnection;
