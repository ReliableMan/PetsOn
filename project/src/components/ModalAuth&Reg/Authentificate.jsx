// import React, { useCallback, useEffect } from "react";
import "./modal.css";
import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  userTypingLogin,
  clearInputs,
  submitUserLogin,
} from "../../redux/actions/userActions";

const Authentificate = () => {
  const inputs = useSelector((store) => store.logInInputs);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const googleClient = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const urlLogin = 'http://localhost:3000';

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(submitUserLogin(inputs));
    dispatch(clearInputs());
    navigate("/");
  };

//  useEffect(
//   window.onload = function () {
//     google.accounts.id.initialize({
//       client_id: 'YOUR_GOOGLE_CLIENT_ID',
//       callback: handleCredentialResponse
//     });
//     google.accounts.id.prompt();
//   }, []);
  


  return (

    <div className="container login header">
      <form onSubmit={submitHandler}>
        <div className="header1">
          <p> Авторизация ||| <Link to='/signup'>Регистрация</Link></p>
        </div>

        <br />
        <div className="row align-items-center">
          <div className="col-auto input-group-sm">
        <div id="g_id_onload"
         data-client_id={googleClient}
         data-login_uri={urlLogin}
         data-auto_prompt="false">
      </div> 

      <div class="g_id_signin"
         data-type="standard"
         data-size="large"
         data-theme="outline"
         data-text="sign_in_with"
         data-shape="rectangular"
         data-logo_alignment="left">
      </div>
      <br />
            <input
              type="text"
              className="form-control "
              name="userEmail"
              placeholder="Email"
              value={inputs.userEmail ?? ""}
              onChange={(event) => dispatch(userTypingLogin(event))} />
          </div>
        </div>
        <br />

        <div className="row align-items-center">

          <div className="col-auto input-group-sm">
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

        <div className="container but">
          <button type="submit" className="btn btn-outline-primary live">
            Войти
          </button>
        </div>
      </form>
    </div>

  );
};

export default Authentificate;
