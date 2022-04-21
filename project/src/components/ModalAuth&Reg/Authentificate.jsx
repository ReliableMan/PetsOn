// import React, { useCallback, useEffect } from "react";
import "./auth.css";
import React from "react";
import { useEffect } from 'react';
import { baseUrl } from "../api/urls";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userTypingLogin, clearInputs, submitUserLogin} from "../../redux/actions/userActions";

const Authentificate = () => {
  const inputs = useSelector((store) => store.logInInputs);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const [ loading, setLoading ] = React.useState(false);
  // const [isAuth, setAuth] = React.useState(false);
  // const [user, setUser] = React.useState('');

  // const setAuthorization = (isAu = false) => {
  //   setAuth(isAu);
  // };

  // const setUserName = (name = '') => {
  //   setUser(name);
  // };

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const isAuth = await (await fetch('/api/auth/check')).json();
  //       setAuth(isAuth.session);
  //       setUser(isAuth.user);
  //     } catch ({ message }) {
  //       console.log('Err: ', message);
  //     }
  //   })();
  // }, []);

  // console.log('user:', user);
  // console.log('isAuth:', isAuth);

  // const googleHandler = async(e) => {
  //   e.preventDefault();
  //   // setLoading(true);
  //   // navigate(`${baseUrl}/api/auth/google`)
  //   window.location.href = `${baseUrl}/api/auth/google`
    
  // };

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(submitUserLogin(inputs));
    dispatch(clearInputs());
    navigate("/");
  };


  return (

    <div className="container login header">
      <form onSubmit={submitHandler}>
        <div className="header1">
          <p> Авторизация ||| <Link to='/signup'>Регистрация</Link></p>
        </div>

        <br />
        <div>
          <div className="col-auto input-group-sm">
       
          {/* <button onClick={googleHandler} disabled={loading}>Google auth strategy</button> */}
      <br />
            <label htmlFor="inputEmail6" className="col-form-label">Email</label>

            <input
              type="email"
              className="form-control "
              name="userEmail"
              placeholder="example@email.com"
              value={inputs.userEmail ?? ""}
              onChange={(event) => dispatch(userTypingLogin(event))} />
          </div>
        </div>
        <br />

        <div>
          <div className="col-auto input-group-sm">
            <label htmlFor="inputPassword6" className="col-form-label">Пароль</label>
            <input
              type="password"
              id="inputPassword6"
              className="form-control"
              name="userPassword"
              placeholder="Пароль"
              value={inputs.userPassword ?? ""}
              onChange={(event) => dispatch(userTypingLogin(event))} />
          </div>
        </div>
        <br />

        <div className="button-container">
          <button type="submit" className="btn btn-outline-primary live">
            Войти
          </button>
        </div>
      </form>
    </div>

  );
};

export default Authentificate;
