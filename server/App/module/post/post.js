const mongoose = require("mongoose");
const schema = mongoose.Schema;
const postSchema = new schema({
  image: {
    type: String,
    required: [true, "image is required"],
  },
  caption: {
    type: String,
    min: 1,
    max: 100,
  },
  uId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "user is required"],
  },  
});
const post = mongoose.model("post", postSchema);
module.exports = { post };
