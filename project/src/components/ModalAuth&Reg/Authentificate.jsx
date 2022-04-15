import React from "react";
import "./modal.css";

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
            <p> Авторизация ||| <Link to='/sign'>Регистрация</Link></p>
            </div>
            <br />
            <div className="row align-items-center">
              <div className="col-auto">
                <label htmlFor="inputPassword6" className="col-form-label">
                  Email
                </label>
              </div>

              <div className="col-auto input-group-sm">
                <input
                  type="text"
                  className="form-control "
                  name="userEmail"
                  value={inputs.userEmail ?? ""}
                  onChange={(event) => dispatch(userTypingLogin(event))}

                  // {...register("email", {
                  //   required: true,
                  //   maxLength: 25,
                  //   pattern: /^[A-Z0-9a-z._%+-]+@[A-Z0-9a-z.-]+\.[A-Za-z]{2,}$/
                  // })}
                />

                {/* {errors?.email?.type === "required" && <p>Это поле не может быть пустым</p>}
                  {errors?.email?.type === "maxLength" && (<p>Не более 25 символов</p>)}
                  {errors?.email?.type === "pattern" && ( <p>Пожалуйста введите правильно свой email.</p>)} */}
              </div>
            </div>
            <br />
            <div className="row align-items-center">
              <div className="col-auto">
                <label htmlFor="inputPassword6" className="col-form-label">
                  Пароль
                </label>
              </div>
            
              <div className="col-auto input-group-sm">
                <input
                  type="password"
                  id="inputPassword6"
                  className="form-control"
                  name="userPassword"
                  value={inputs.userPassword ?? ""}
                  onChange={(event) => dispatch(userTypingLogin(event))}

                  // {...register("password", {
                  //   required: true,
                  //   min: 8,
                  //   max: 20
                  // })}
                />

                {/* {errors?.password?.type === "required" && <p>Обязательно напишите пароль.</p>}
                  {errors.password && <p>Пароль должен содержать не менее 8 символов и не более 20.</p>} */}
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
