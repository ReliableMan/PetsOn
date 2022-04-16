import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./post.css";

export default function CatId() {
  const [postCat, setPostCat] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3903/posts/cats/${id}`).then((PostsCat) => {
      //console.log(PostsCat);
      const { picture, title, text } = PostsCat.data;
      //console.log("7777777", picture);
      setPostCat({ picture, title, text });
      console.log(postCat);
    });
  }, []);

  return (
    <div className="container">
      <h3>{postCat.title}</h3>
      <img  src={postCat.picture} className="pet-image"
      alt ="dog" width="500" height="auto"/>
      <p className="postText">{postCat.text}</p>
    </div>
  );
}
