import React, { useState } from "react";
import axiosInstance from "../../AxiosInstance/AxiosInstance";
import "./AddPost.css";
import SideNav from "../SideNav/SideNav";
import { MdCancel } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddPost = () => {
  const [image, setImage] = React.useState(null);
  const [caption, setcaption] = React.useState("");
  const [postError, setPostError] = React.useState("");
  const [imageUrl, setImageUrl] = useState(null);

  const validate = () => {
    if (image === null && caption.length === 0) {
      setPostError("Empty post can't be posted");
      return false;
    } else {
      return true;
    }
  };
  const submitData = async () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("caption", caption);

    try {
      const result = await axiosInstance.post(
        "http://localhost:8000/api/addPost",
        formData
      );
      if (result.data.hasOwnProperty("error")) {
        toast.warning("failed to upload", {
          position: "top-center",
          autoClose: 2000,
        });
      } else {
        toast.success("Posted Succesfully", {
          position: "top-center",
          autoClose: 2000,
        });
        setImage(null);
        setcaption("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    validate() ? submitData() : console.log("failed to upload");
  };

  return (
    <div>
      <SideNav />
      <div className="addpost">
        <form encType="multipart/form-data">
          <div className="addpost-form">
            <div className=" addpost-titile">
              <p> Add Post</p>
            </div>

            <div>
              {image !== null ? (
                <>
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
                      src={imageUrl}
                      alt="waiting"
                    />
                  </div>
                </>
              ) : (
                <div className="addpost-image">
                  <input
                    type="file"
                    alt="image"
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
                </div>
              )}
            </div>
            <div className="addpost-caption">
              <textarea
                value={caption}
                onChange={(e) => {
                  setcaption(e.target.value);
                }}
              />
            </div>
            <div className="addpost-error">
              <p>{postError}</p>
            </div>
          </div>

          <div className="addpost-addbutton">
            <button onClick={submitHandler}>POST</button>
          </div>
        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default AddPost;
