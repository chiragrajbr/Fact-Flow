const express = require("express");
const {
  postController,
} = require("../App/controller/postController/postController");
const { upload } = require("../App/middleware/multer/multer");
const {
  userController,
} = require("../App/controller/userController/userController");
const { auth } = require("../App/middleware/auth/auth");
const routes = express.Router();

// login
routes.post("/register", userController.register);
routes.post("/login", userController.login);

routes.post(
  "/addPost",
  auth.verify,
  upload.single("image"),
  postController.addpost
);

module.exports = { routes };
