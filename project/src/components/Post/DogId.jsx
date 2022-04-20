import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {useSelector} from "react-redux";
import axios from "axios";
import "./post.css";

export default function DogId() {
  const [postDog, setPostDog] = useState([]);
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const booleanAuthorized = useSelector((store) => store.isAuthorized); 

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
    //console.log(text);

    // // TODD call api (axios) to create a comment for the post with id postCat.id (POST http://..../posts/${postCat.id}/comemnts)
   
    return axios
      .post(
        `http://localhost:3903/posts/${id}/comments`,
        { text },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((response) => {
        return axios
          .get(`http://localhost:3903/posts/${id}/comments`)
          .then((response) => {
            const { data: comments } = response;

            setComments(comments);
          });
      })
      .catch((error) => alert(error.message));
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
{booleanAuthorized ? 
<>
      <h5>Оставьте комментарий</h5>
      <form className="comment" onSubmit={handleCommentSubmit}>
        <textarea name="text" cols="50" rows="5"></textarea>
        <button type="submit" class="btn btn-light">Сохранить комментарий</button>
      </form>
</>
      : null
} 
    </div>
  );
}
