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

  const [ loading, setLoading ] = React.useState(false);
  const [isAuth, setAuth] = React.useState(false);
  const [user, setUser] = React.useState('');

  const setAuthorization = (isAu = false) => {
    setAuth(isAu);
  };

  const setUserName = (name = '') => {
    setUser(name);
  };

  useEffect(() => {
    (async () => {
      try {
        const isAuth = await (await fetch('/api/auth/check')).json();
        setAuth(isAuth.session);
        setUser(isAuth.user);
      } catch ({ message }) {
        console.log('Err: ', message);
      }
    })();
  }, []);

  console.log('user:', user);
  console.log('isAuth:', isAuth);

  const googleHandler = () => {
    setLoading(true);
    navigate(`${baseUrl}/api/auth/google`);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(submitUserLogin(inputs));
    dispatch(clearInputs());
    navigate("/");
  };


  return (

    <div className="container login header">
      <form className='for_req' onSubmit={submitHandler}>
        <div className="header1">
          <p className="p_text"> Авторизация <Link to='/signup'>Регистрация</Link></p>
        </div>

        <br />
        <div>
          <div className="col-auto input-group-sm">

            <div id="g_id_onload"
              data-client_id
              data-login_uri
              data-auto_prompt="false">
            </div>

            <label htmlFor="inputEmail6" className="col-form-label">* зарегистрируйтесь с помощью Google</label>
          <button className="btn_google btn-light " onClick={googleHandler} disabled={loading}>signin with Google</button>

            <input
              type="email"
              className="form-input"
              name="userEmail"
              placeholder="example@email.com"
              value={inputs.userEmail ?? ""}
              onChange={(event) => dispatch(userTypingLogin(event))} />
          </div>
        </div>
      

        <div>
          <div className="col-auto input-group-sm">
            <label htmlFor="inputPassword6" className="col-form-label">ПАРОЛЬ</label>
            <input
              type="password"
              id="inputPassword6"
              className="form-input"
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
