import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./post.css";

export default function Dog() {
  const [postDog, setPostDog] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3903/posts/dogs").then((allPostsDog) => {
      console.log(allPostsDog);

      const arr = [];
      allPostsDog.data.forEach((i) => arr.push(i.title));
      console.log("7777777", allPostsDog.data);
      setPostDog(allPostsDog.data);
    });
  }, []);

  return (
    <>
      <div className="posts-container">
        {postDog.map((el) => (
          <Link key={el.id} to={`/posts/dogs/${el.id}`}>
            <div className="one-post-container">
              <div className="img-container">
                <img src={el.picture} className="pet-link-image"
                alt="" width="200" height="150" />
              </div>
              <div className="link-container">
                {el.title}
                {/* <div className="shorten-text">
                  {el.text.slice(0, 170) + "..."}
                </div> */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
