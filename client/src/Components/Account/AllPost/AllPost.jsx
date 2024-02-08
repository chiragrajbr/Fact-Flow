import React, { useEffect, useState } from "react";
import axiosInstance from "../../AxiosInstance/AxiosInstance";
import SideNav from "../SideNav/SideNav";

const AllPost = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      axiosInstance
        .get("http://localhost:8000/api/getAllPostByuser")
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
  return (
    <div>
      <SideNav />
      <div>
        {data.map((ele) => {
          return (
            <div key={ele._id}>
              <div>
                <img src={ele.image} alt="not found" />
              </div>
              <div>
                <h1>{ele.caption}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllPost;
