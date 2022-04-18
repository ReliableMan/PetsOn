import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./post.css";

export default function Cat() {
  const [postCat, setPostCat] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3903/posts/cats").then((allPostsCat) => {
      console.log(allPostsCat);

      const arr = [];
      allPostsCat.data.forEach((i) => arr.push(i.title));
      //console.log("7777777", allPostsCat.data);
      setPostCat(allPostsCat.data);
    });
  }, []);

  return (
    <>
      <div className="posts-container">
        {postCat.map((el) => (
          <Link key={el.id} to={`/posts/cats/${el.id}`}>
            <div className="one-post-container">
              <div className="img-container">
                <img src={el.picture} className="pet-link-image"
                alt="" width="200" height="150" />
              </div>
              <div className="link">
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

