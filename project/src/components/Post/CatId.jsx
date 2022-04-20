import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import "./post.css";

export default function CatId() {
  const [postCat, setPostCat] = useState([]);
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const booleanAuthorized = useSelector((store) => store.isAuthorized);

  //   const addHandler = (e) => {
  //   e.preventDefault()
  //   setPostCat(prev => [...prev, likes: 0])
  // }

  const addLike = (id) => {
    const likes = 0;
    setPostCat(postCat.filter((e) => (postCat.likes += 1)));
  };

  useEffect(() => {
    axios.get(`http://localhost:3903/posts/${id}`).then((PostsCat) => {
      //console.log(PostsCat);
      const { id, picture, title, text } = PostsCat.data;
      //console.log("7777777", picture);
      setPostCat({ id, picture, title, text });
      //console.log(postCat);

      // // TODO call api (axios) to get the comments for this post (GET http://..../posts/${id}/comemnts))

      return axios
        .get(`http://localhost:3903/posts/${id}/comments`)
        .then((response) => {
          console.log(response);
          const { data: comments } = response;

          setComments(comments);
        });
    });
  }, []);

  const handleCommentSubmit = (event) => {
    event.preventDefault();

    const text = event.target.text.value;
    //console.log(text);

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
      <ul>
        {comments.map((comment) => (
          <li className="comment-text">{comment.text}</li>
        ))}
        {/* <button onClick={() => addLike(id)} className="btn btn-success">Like 👍 {postCat.likes}</button> */}
      </ul>

     {booleanAuthorized ? (
       <>
        <h1>Оставьте комментарий</h1>
        <form className="comment-form" onSubmit={handleCommentSubmit}>
          <textarea className="comment-textarea" name="text" cols="50" rows="5"></textarea>
          <button type="submit" className="comment-button btn btn-light live">
            Сохранить комментарий
          </button>
        </form>
      </>
      ) : null}

    </div>
  );
}
