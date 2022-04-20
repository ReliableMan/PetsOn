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
      setPostDog(allPostsDog.data);
    });
  }, []);

  return (
    <>
      <div className="posts-container">
        {postDog.map((el) => (
          <>
            <div className="one-post-container">
              <Link key={el.id} to={`/posts/dogs/${el.id}`}>
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
