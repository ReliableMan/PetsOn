import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./post.css";

export default function DogId() {
  const [postDog, setPostDog] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3903/posts/dogs/${id}`).then((PostsDog) => {
      //console.log(PostsDog);
      const { picture, title, text } = PostsDog.data;
      //console.log("7777777", picture);
      setPostDog({ picture, title, text });
      console.log(postDog);
    });
  }, []);

  return (
    <div className="container">
      <h3>{postDog.title}</h3>
      <img  className='' src={postDog.picture} />
      <p>{postDog.text}</p>
    </div>
  );
}
