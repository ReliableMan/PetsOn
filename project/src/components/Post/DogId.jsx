import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./post.css";

export default function DogId() {
  const [postDog, setPostDog] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3903/posts/${id}`).then((PostsDog) => {
      //console.log(PostsDog);
      const { picture, title, text } = PostsDog.data;
      //console.log("7777777", picture);
      setPostDog({ picture, title, text });
      console.log(picture, "pic");
    });
  }, []);

  return (
    <div className="container">
      <h3>{postDog.title}</h3>
      <img src={postDog.picture} className="pet-image"
      alt ="dog" width="500" height="auto"/>
      <p>{postDog.text}</p>
    </div>
  );
}
