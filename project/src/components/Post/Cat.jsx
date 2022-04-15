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
      <div className="container-post">
        {postCat.map((el) => (
          <Link className="post" key={el.id} to={`/posts/cats/${el.id}`}>
            {el.title}
            <img src={el.picture} alt="" width="150" height="150"/>
          </Link>
        ))}
      </div>
    </>
  );
}

