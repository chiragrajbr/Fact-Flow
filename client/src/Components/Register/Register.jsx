import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Register.css";
import { IoMdEyeOff } from "react-icons/io";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const formdata = {
    name: userName,
    email: email,
    password: password,
  };
  const checkCondition = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (userName.length === 0 && password.length === 0 && email.length === 0) {
      toast.warning("please enter data", {
        position: "top-center",
        autoClose: 2000,
      });
      return false;
    } else if (userName.length === 0) {
      toast.warning("Please enter username", {
        position: "top-center",
        autoClose: 2000,
      });
      return false;
    } else if (email.length === 0) {
      toast.warning("Please enter email", {
        position: "top-center",
        autoClose: 2000,
      });
      return false;
    } else if (!email.match(emailPattern)) {
      toast.warning("Please enter proper Email", {
        position: "top-center",
        autoClose: 2000,
      });
      return false;
    } else if (password.length === 0) {
      toast.warning("Please enter password", {
        position: "top-center",
        autoClose: 2000,
      });
      return false;
    } else if (password.includes(" ")) {
      console.log("passowrd error");
      toast.warning("password should not contain a white space", {
        position: "top-center",
        autoClose: 2000,
      });
      return false;
    } else {
      return true;
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    checkCondition();
    axios
      .post("http://localhost:8000/api/register", formdata)
      .then((res) => {
        let result = res.data;
        if (result.hasOwnProperty("error")) {
          toast.warning(result.error, {
            position: "top-center",
            autoClose: 2000,
          });
        } else {
          toast.success("register succesfully", {
            position: "top-center",
            autoClose: 2000,
          });
          setTimeout(() => {
            navigate("/login");
          }, [2000]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <React.Fragment>
      <div className="register-page">
        <div className="register-header">
          <p>Register</p>
        </div>
        <form onSubmit={submitHandler}>
          <div className="form-label mt-10">
            <input
              type="text"
              className="register-input"
              placeholder="UserName"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
          <div className="form-label mt-10">
            <input
              type="text"
              className="register-input"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="form-label">
            <input
              type={showPassword ? "text" : "password"}
              className="register-input"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <IoMdEyeOff
              className="form-label-toggle"
              onClick={togglePasswordVisibility}
            />
          </div>

          <button className="register-submit">SUBMIT</button>
        </form>
        <div className="register-register">
          <p className="register-register-text"> new user? </p>
          <Link to={"/login"} className="register-register-link">
            Login
          </Link>
        </div>
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
    </React.Fragment>
  );
};

export default Register;
