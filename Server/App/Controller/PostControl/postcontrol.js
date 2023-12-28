const postModel = require("../../Model/Post/post");
const postController = {};

postController.addPost = async (req, res) => {
  const body= req.body;
  const data = req.user;

 try {
    await new postModel(body).save()
    .than(()=>{
        res.json({ message: "post details added successfully" });
    })
    .catch((err)=>{
        res.json({"error":err})
    })
   
  } 
  catch (error) {
    res.json({ error: "Internal server error" });
  } 
};
module.exports = postController;
