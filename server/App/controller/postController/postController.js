const { post } = require("../../module/post/post");
const postController = {};
postController.addpost = (req, res) => {
  const data = req.user;
  const { caption } = req.body;
  const imagePath = req.file.filename;
  const newPost = {
    image: imagePath,
    caption: caption,
    uId: data.user_Id,
  };
  new post(newPost)
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((e) => {
      res.json({ error: e.message });
    });
};

postController.getAllPost = async (req, res) => {
  const data = req.user;
  try {
    const allPosts = await post.find({ uId: data.user_Id });
    res.json(allPosts);
  } catch (error) {
    res.json({ error: error.message });
  }
};

postController.delete = (req,res) => {
   
};
module.exports = { postController };
