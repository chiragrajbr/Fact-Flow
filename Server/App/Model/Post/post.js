const mongoose=require("mongoose")
const postSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"please fill the title"],
        min:1,
        max:50
    },
    image:{
        type:String
    },
    description:{
        type:String,
        required:[true,"description is needed"],
        min:1,
        max:100
    }
})
const postModel=mongoose.model("postModel",postSchema)
module.exports=postModel