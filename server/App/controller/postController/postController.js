const { post } = require("../../module/post/post");
const postController = {};
postController.addpost = async (req, res) => {
  const data = req.user;
  const { caption } = req.body;
  const imagePath = req.file.filename;
  const addImage = new post({
    image: imagePath,
    caption,
  
    userId: data.user_Id,
  });
  addImage
    .save()
    .then((response) => {
      res.json(response);
      //console.log(response.data);
    })
    .catch((e) => {
      res.json({ error: error });
      console.log(e.message);
    });
};

module.exports = { postController };
