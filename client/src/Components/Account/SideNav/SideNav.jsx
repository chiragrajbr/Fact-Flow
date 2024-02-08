import React from "react";
import { MdPostAdd } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { RiLogoutCircleLine } from "react-icons/ri";
import "./SideNav.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SideNav = () => {
  const navigate = useNavigate();
  const logOutHandler = () => {
    toast.success("logout successfully", {
      position: "top-center",
      autoClose: 2000,
    });
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className="sidenav">
      <div className="navitem">
        <MdPostAdd
          size={30}
          color="skyblue"
          onClick={() => {
            navigate("/addpost");
          }}
        />
      </div>
      <div className="navitem">
        <GrGallery
          size={25}
          color="grey"
          onClick={() => {
            navigate("/allPost");
          }}
        />
      </div>
      <div className="navitem">
        <RiLogoutCircleLine size={25} color="grey" onClick={logOutHandler} />
      </div>
    </div>
  );
};

export default SideNav;
