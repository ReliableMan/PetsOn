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
      setPostCat(allPostsCat.data);
    });
  }, []);

  return (
    <>
      <div className="posts-container">
        {postCat.map((el) => (
          <>
            <div className="one-post-container">
              <Link key={el.id} to={`/posts/cats/${el.id}`}>
                <div className="img-container">
                  <img src={el.picture} className="pet-link-image"
                    alt="" width="200" height="150" />
                </div>
              </Link>
              <div className="link">
                <p>{el.title}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
