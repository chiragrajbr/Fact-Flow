const multer = require("multer");
//const upload = multer({ dest: "uploads/", boundary: "your_boundary_string" });
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./Images");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

module.exports = {
  upload,
};
