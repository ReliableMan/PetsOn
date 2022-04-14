import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./post.css";

export default function Dog() {
  const [postPet, setpostPet] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3903/pet/pet/1')
    .then((allPostsDog)=>{
     console.log(allPostsDog);

    //  const arr = [];
    //   allPostsFromServer.data.forEach(i => 
    //    arr.push(i.title))
    //   //console.log('7777777', allPostsFromServer.data);
    //  setPost(allPostsFromServer.data)
    })
  },[]);

  return (
    <div>Dog</div>
  )
}
