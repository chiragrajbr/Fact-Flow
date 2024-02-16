import React, { useEffect, useState } from "react";
import axiosInstance from "../../AxiosInstance/AxiosInstance";
import SideNav from "../SideNav/SideNav";
import { MdDelete } from "react-icons/md";
import "./AllPost.css";

const AllPost = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      axiosInstance
        .get("http://localhost:8000/api/getAllPosts")
        .then((result) => {
          console.log(result.data);
          setData(result.data);
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);
  console.log(data);
  return (
    <div className="allpost-main">
      <div className="allpost-sidenav">
        <SideNav />
      </div>

      <div className="allpost-data">
        {data.map((ele) => {
          return (
            <div key={ele._id} className="allpost-post">
              <div className="">
                <img
                  src={`http://localhost:8000/Images/${ele.image}`}
                  alt="not found"
                  height={400}
                  width={400}
                />
              </div>
              <div className="allpost-caption">
                <h1>{ele.caption}</h1>
              </div>
              <div className="allpost-delete">
                <MdDelete size={25} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllPost;
