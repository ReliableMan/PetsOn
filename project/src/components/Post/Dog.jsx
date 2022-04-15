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
      <div className="container-post">
        {postDog.map((el) => (
          <Link className="post" key={el.id} to={`/posts/dogs/${el.id}`}>
            {el.title}
            <img src={el.picture} alt="" width="150" height="150"/>
          </Link>
        ))}
      </div>
    </>
  );
}
