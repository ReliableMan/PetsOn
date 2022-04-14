import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./post.css";

export default function Post() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3903/pet')
    .then((allPostsFromServer)=>{
     // console.log(allPostsFromServer.data[0].title);

     const arr = [];
      allPostsFromServer.data.forEach(i => 
       arr.push(i.title))
      //console.log('7777777', allPostsFromServer.data);
     setPost(allPostsFromServer.data)
    })
  },[]);



//console.log('111', post);

  return (
    <div className="container-all">
      <div className="text-title">О ком будем читать?</div>

      <div className="container-link">
        <Link className="cat" to="/pet/pet/1">
          <img src="images/cat.png" alt="logoCat" style={{ width: "5rem" }} />
        </Link>
        <Link className="dog" to="/pet/pet/2">
          <img src="images/dog.png" alt="logoDog" style={{ width: "5rem" }} />
        </Link>
      </div>

      <div className="container-post">
        {post.map(el=>  
           (<Link className="post1" key={el.id} to='/post/`${id}`'>
          {el.title}
        </Link>))}


      {/* //   <Link className="post1" to="/post1">
      //     {post[0]}
      //   </Link>
      //   <Link className="post2" to="/post2">
      //     Название статьи
      //   </Link>
      //   <Link className="post3" to="/post3">
      //     Название статьи
      //   </Link> */}
       </div>
    </div>
  );
}
