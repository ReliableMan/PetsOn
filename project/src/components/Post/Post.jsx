import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./post.css";

export default function Post() {
  const [post, setPost] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:3903/posts").then((allPostsFromServer) => {
      // console.log(allPostsFromServer.data[0].title);

      const arr = [];
      allPostsFromServer.data.forEach((i) => arr.push(i.title));
      //console.log('7777777', allPostsFromServer.data);
      setPost(allPostsFromServer.data);
    });
  }, []);

  return (
    <div className="container-all">

      <div className="text-title">О ком будем читать?</div>

      <div className="container-link">
        <Link className="cat" to="/posts/cats">
          <img src="images/cat.png" alt="logoCat" style={{ width: "15rem" }} />
        </Link>
        <Link className="cat" to="/posts/dogs">
          <img src="images/dog.png" alt="logoCat" style={{ width: "15rem" }} />
        </Link>
      </div>

      {/* <div className="container-post">
        {post.map((el) => (
          <Link className="post" key={el.id} to="/posts/`${id}`">
            {el.title}
          </Link>
        ))}
      </div> */}
    </div>
  );
}
