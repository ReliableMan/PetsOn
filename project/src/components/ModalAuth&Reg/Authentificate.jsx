import React from 'react';
import './modal.css'
// import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userTypingLogin, clearInputs, submitUserLogin } from '../../redux/actions/userActions';


const Authentificate = ({ active, setActive }) => {
 
  const inputs = useSelector(store => store.logInInputs);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { register, handleSubmit, formState: { errors } } = useForm();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log('inputs', inputs)
      dispatch(submitUserLogin(inputs));
      dispatch(clearInputs());
      navigate('/')
  }

    return (
        <div className={active ? "modal active": "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modelContent active": "modelContent"} onClick={(e) => e.stopPropagation()}>
            <form onSubmit={submitHandler}>
              <p> Авторизация</p>
               <br/>
               <div className="row g-3 align-items-center">
                   <div className="col-auto">
                    <label htmlFor="inputPassword6" className="col-form-label">Email</label>
                   </div>

                <div className="col-auto">
                  <input type="text" className="form-control" name="userEmail"
                  value={inputs.userEmail ?? ''}
                  onChange={event => dispatch(userTypingLogin(event))} 

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
                    <div className="row g-3 align-items-center">
                   <div className="col-auto">
                    <label htmlFor="inputPassword6" className="col-form-label">Пароль</label>
                   </div>
<hr/>
                <div className="col-auto">
                  <input type="password" id="inputPassword6" className="form-control" 
                  name="userPassword" 
                  value={inputs.userPassword ?? ''} 
                  onChange={event => dispatch(userTypingLogin(event))}

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
               <div className="container"> 
               <button type="submit" className="btn btn-outline-primary">Войти</button>
               </div>
               
               </form>
              </div>
        </div>
    );
};

export default Authentificate;
