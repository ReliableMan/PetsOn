import React from "react";
import { Link } from "react-router-dom";
import "./post.css";

export default function Post() {
  return (
    <div className="container-all">
      <div className="text-title">О ком будем читать?</div>
      <div className="container-link">
        <Link className="cat" to="/post/cat">
          <img src="images/cat.png" alt="logoCat" style={{ width: "5rem" }} />
        </Link>
        <Link className="cat" to="/post/dog">
          <img src="images/dog.png" alt="logoCat" style={{ width: "5rem" }} />
        </Link>
      </div>

      <div className="container-post">
        <Link className="post1" to="/post1">
          Название статьи
        </Link>
        <Link className="post2" to="/post2">
          Название статьи
        </Link>
        <Link className="post3" to="/post3">
          Название статьи
        </Link>
      </div>
    </div>
  );
}
