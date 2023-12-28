import React from "react";
import axios from "axios";
import home from "./home.css";

const Home = () => {
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
    <div>
      <center>
        <h1>FACT FLOW </h1>

        <br />
        <form onSubmit={submitHandler}>
          <div className="title-container">
            <input
              type="text"
              placeholder="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <input
            type="file"
            alt="image"
            accept="image/*"
            onChange={handleImage}
          />
          <div className="image-container">
            {image && (
              <div>
                <img
                  src={image}
                  alt="waiting"
                  style={{ height: "470px", width: "400px" }}
                />{" "}
              </div>
            )}
            <div className="desciption-container">
              <input
                type="text"
                placeholder="desciption"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
            <button>submit</button>
          </div>
        </form>
      </center>
    </div>
  );
};

export default Home;
