import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import Home from "./Components/Home/Home";
import AddPost from "./Components/Account/AddPost/AddPost";
import UserDetail from "./Components/Account/UserDetails/UserDetail";
import AllPost from "./Components/Account/AllPost/AllPost";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import PageNotFound from "./Components/PageNotFound/PageNotFound";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/addpost" element={<AddPost />} />
          <Route path="/account" element={<UserDetail />} />
          <Route path="/allPost" element={<AllPost />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
