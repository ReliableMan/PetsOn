
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
