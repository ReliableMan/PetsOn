import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./post.css";

export default function CatId() {
  const [postCat, setPostCat] = useState([]);
  const { id } = useParams();
  const [comments, setComments] = useState([]);

  //   const addHandler = (e) => {
  //   e.preventDefault()
  //   setPostCat(prev => [...prev, likes: 0])                                                      
  // }

  const addLike = (id) => {
    const likes = 0;
    setPostCat(postCat.filter((e) => postCat.likes += 1))
  }

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
    console.log(text);


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
        <button onClick={() => addLike(id)} className="btn btn-success">Like 👍 {postCat.likes}</button>
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
