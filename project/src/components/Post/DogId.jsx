import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./post.css";

export default function DogId() {
  const [postDog, setPostDog] = useState([]);
  const { id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3903/posts/${id}`).then((PostsDog) => {
      //console.log(PostsDog);
      const { picture, title, text } = PostsDog.data;
      //console.log("7777777", picture);
      setPostDog({ picture, title, text });
      //console.log(picture, "pic");

      return axios.get(`http://localhost:3903/posts/${id}/comments`)
      .then(response => {
        const { data: comments } = response

        setComments(comments)
      })
    });
  }, []);

  const handleCommentSubmit = event => {
    event.preventDefault()

    const text = event.target.text.value
    console.log(text);

    // // TODD call api (axios) to create a comment for the post with id postCat.id (POST http://..../posts/${postCat.id}/comemnts)
    fetch(`http://localhost:3903/posts/${id}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application',
        credentials: "include",
      },
      body: JSON.stringify({ text })
    })
      .then(() => alert('comment submitted'))
      .catch(error => alert(error.message))

    // TODO call api (axios) to refresh the comments list (GET http://..../posts/${postCat.id}/comemnts)
  }

  return (
    <div className="container_id">
      <h3>{postDog.title}</h3>
      <img src={postDog.picture} className="pet-image"
      alt ="dog" width="500" height="auto"/>
      <p>{postDog.text}</p>
      <h4>Комментарии</h4>
      <ul>
        {comments.map(comment => <li>{comment.text}</li>)}
      </ul>

      <h5>Оставьте комментарий</h5>
      <form onSubmit={handleCommentSubmit}>
        <textarea name="text" cols="50" rows="5"></textarea>
        <button type="submit">Сохранить комментарий</button>
      </form>
    </div>
  );
}
