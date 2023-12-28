import React from "react";
import { Routes, Route } from "react-router-dom";
//import Home from "../src/Home/Home";
import AddPost from "./AddPost/AddPost";
import Navbar from "./Navbar/Navbar";
import Login from "./Login/Login";
//import HomeOne from "./HomeOne/HomeOne";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<AddPost />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
