import React, { useState } from "react";

const Home = () => {
  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(image);
    console.log(imageUrl);
  };
  return (
    <div>
      <h1> Homepage</h1>
      <form>
        <label>Select Image</label>
        {image !== "" ? (
          <>
            <img src={imageUrl} height={400} width={400} alt="alt" />
          </>
        ) : (
          <>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                setImage(file);
                if (file) {
                  const imageURL = URL.createObjectURL(file);
                  setImageUrl(imageURL);
                }
              }}
            />
          </>
        )}
        <button className="btn btn-primary" onClick={submitHandler}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
