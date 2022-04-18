import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./post.css";

export default function CatId() {
  const [postCat, setPostCat] = useState([]);
  const { id } = useParams();
  const [comments, setComments] = useState([]);
console.log(id, 'gggg');
  useEffect(() => {
    axios.get(`http://localhost:3903/posts/${id}`).then((PostsCat) => {
      const { id, picture, title, text } = PostsCat.data;

      setPostCat({ id, picture, title, text });
      //console.log(postCat);

      // // TODO call api (axios) to get the comments for this post (GET http://..../posts/${id}/comemnts))

      return axios
        .get(`http://localhost:3903/posts/${id}/comments`)
        .then((response) => {
          const { data: comments } = response;

          setComments(comments);
        });
    });
  }, []);

  const handleCommentSubmit = async (event) => {
    event.preventDefault();

    const text = event.target.text.value;
    console.log(text);

    // // TODD call api (axios) to create a comment for the post with id postCat.id (POST http://..../posts/${postCat.id}/comemnts)
    //const { id, picture, title, text } = PostsCat.data;
 const responce = await 
    fetch(`http://localhost:3903/posts/${id}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application",
        credentials: "include",
      },
      body: JSON.stringify({ text }),
    })
    console.log( responce, '888888888');
      // .then(() => alert("comment submitted"))
      // .catch((error) => alert(error.message));
      console.log(id, '-------------');

    // TODO call api (axios) to refresh the comments list (GET http://..../posts/${postCat.id}/comemnts)
  };
  return (
    <div className="container_id">
      <h3>{postCat.title}</h3>

      <img
        src={postCat.picture}
        className="pet-image"
        alt="cat"
        width="500"
        height="auto"
      />

      <p className="postText">{postCat.text}</p>

      <h4>Комментарии</h4>
      <ul>
        {comments.map((comment) => (
          <li>{comment.text}</li>
        ))}
      </ul>

      <h5>Оставьте комментарий</h5>
      <form onSubmit={handleCommentSubmit}>
        <textarea name="text" cols="50" rows="5"></textarea>
        <button type="submit" className="btn btn-light">
          Сохранить комментарий
        </button>
      </form>
    </div>
  );
}
