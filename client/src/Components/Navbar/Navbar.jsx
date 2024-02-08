import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-success">
        <div
          className="navbar navbar-brand text-gray-700  font-bold tracking-widest cursor-pointer "
          onClick={() => {
            navigate("/");
          }}
        >
          {" "}
        </div>
        <div>
          <h3> Fact Flow</h3>
        </div>
        <div className="ml-auto">
          <ul className="navbar-nav ">
            {localStorage.getItem("token") ? (
              <>
                <MdOutlineAccountCircle
                  size={35}
                  color="white"
                  className="mr-3"
                  onClick={() => {
                    navigate("/account");
                  }}
                />
              </>
            ) : (
              <>
                <IoMdLogIn
                  size={35}
                  color="white"
                  className="mr-3"
                  onClick={() => {
                    navigate("/login");
                  }}
                />{" "}
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
