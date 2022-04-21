import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./post.css";
import { useDispatch } from "react-redux";
import {
  setAuthorized
} from "../../redux/actions/userActions";

export default function Cat() {
  const [postCat, setPostCat] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://localhost:3903/auth/session', {
      credentials: 'include',
    }).then(raw => raw.json())
      .then(user => dispatch({type: 'SET_USER', payload: user}))
      .then(user => dispatch(setAuthorized()))
  }, [dispatch]);

  useEffect(() => {
    axios.get("http://localhost:3903/posts/cats").then((allPostsCat) => {
      //console.log(allPostsCat);

      const arr = [];
      allPostsCat.data.forEach((i) => arr.push(i.title));
      setPostCat(allPostsCat.data);
    });
  }, []);

  return (
    <>
      <div className="posts-container">
        {postCat.map((el) => (
          <>
            <div className="one-post-container">
              <Link key={el.id} to={`/posts/cats/${el.id}`}>
                <div className="img-container">
                  <img src={el.picture} className="pet-link-image"
                    alt="" width="200" height="150" />
                </div>
              </Link>
              <div className="link">
                <p>{el.title}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
