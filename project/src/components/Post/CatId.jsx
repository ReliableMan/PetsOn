import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import "./post.css";
import { clearInputsServices } from "../../redux/actions/userActions";

export default function CatId() {
  const [postCat, setPostCat] = useState([]);
  const [inputValue, setInputValue] = useState([]);
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const booleanAuthorized = useSelector((store) => store.isAuthorized);

  const handleUserInput = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    axios.get(`http://localhost:3903/posts/${id}`).then((PostsCat) => {

      const { id, picture, title, text } = PostsCat.data;

      setPostCat({ id, picture, title, text });


      // // TODO call api (axios) to get the comments for this post (GET http://..../posts/${id}/comemnts))

      return axios
        .get(`http://localhost:3903/posts/${id}/comments`)
        .then((response) => {
          // console.log(response, 'response');
          const { data: comments } = response;

          setComments(comments);
        });
    });
  }, []);

  const handleCommentSubmit = (event) => {
    event.preventDefault();

    const text = event.target.text.value;
    //console.log(text);
    setInputValue('');


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
      
  };

  return (
    <div className="container_id">
      <h1>{postCat.title}</h1>

      <img
        src={postCat.picture}
        className="pet-image"
        alt="cat"
        width="500"
        height="auto"
      />

      <p className="postText">{postCat.text}</p>

      <h1>Комментарии</h1>
      <ul className="list-comments">
        {comments.map((comment) => (
          <div className="comment-container">
              <strong>{comment.User.username}: </strong>
              <div>{comment.text}</div>
          </div>
        ))}
      </ul>

      {booleanAuthorized ? (
        <>
          <h1 className="title-comment-form">Оставьте комментарий</h1>
          <form className="comment-form" onSubmit={handleCommentSubmit}>
            <textarea
              className="comment-textarea"
              name="text"
              cols="50"
              rows="5" 
              value={inputValue} onChange={handleUserInput}
            ></textarea>
            <button type="submit" className="comment-button btn btn-light live"  >
              Сохранить комментарий
            </button>
          </form>
        </>
      ) : null}
    </div>
  );
}
