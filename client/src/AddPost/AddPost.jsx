import React from "react";
import axios from "axios";
import "./Addpost.css";
import { MdCancel } from "react-icons/md";
const AddPost = () => {
  const [title, setTitle] = React.useState("");
  const [image, setImage] = React.useState(null);
  const [description, setDescription] = React.useState("");
  const formData = {
    title: title,
    image: image,
    description: description,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post("http://localhost:3003/addPost", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log({ err: "post not inserted" });
      });
  };
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
    }
  };
  return (
    <div className="addpost">
      <form>
        <div className="addpost-form">
          <div className=" addpost-titile">
            <p> Add Post</p>
          </div>

          <div>
            {image ? (
              <div>
                <MdCancel
                  className="addpost-image-cancel"
                  size={30}
                  color="white"
                  onClick={() => {
                    setImage(null);
                  }}
                />
                <img
                  className="apppost-imagedisplay"
                  src={image}
                  alt="waiting"
                />
              </div>
            ) : (
              <div className="addpost-image">
                <input
                  type="file"
                  alt="image"
                  accept="image/*"
                  onChange={handleImage}
                />
              </div>
            )}
          </div>
          <div className="addpost-caption">
            <input type="text" placeholder="Caption.." />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
