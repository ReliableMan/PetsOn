import React from 'react';
import './modal.css';
// import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { userTyping } from '../../redux/actions/userActions';
// clearInputs, submitUser 

const Registration = ({ active, setActive }) => {
  const inputs = useSelector(store => store.signUpInputs);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  //  отслеживать изменения инпутов при вводе данных
  const changeHandler = (e) => {
    dispatch(userTyping(e))
  }
  // записать данные и диспатчом отправить на бэк и записать 
  // const submitHandler = async (e) => {
  //   e.preventDefault();
  // }

    return (
        <div className={active ? "modal active": "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modelContent active": "modelContent"} onClick={(e) => e.stopPropagation()}>
              <p> Регистрация</p>
                <div className="row g-3 align-items-center">
                   <div className="col-auto">
                    <label htmlFor="inputLogin" className="col-form-label">Логин</label>
                   </div>
                <div className="col-auto">
                  <input type="text" name="userName" id="inputPassword6" 
                  className="form-control" value={inputs.userName} onChange={changeHandler}/>
                </div>
               </div>
               <br/>
               <div className="row g-3 align-items-center">
                   <div className="col-auto">
                    <label htmlFor="inputEmail6" className="col-form-label">Email</label>
                   </div>
                <div className="col-auto">
                  <input type="password" name="userEmail" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" value={inputs.userEmail}/>
                </div>
               </div>
                    <br />
                    <div className="row g-3 align-items-center">
                   <div className="col-auto">
                    <label htmlFor="inputPassword6" className="col-form-label">Пароль</label>
                   </div>
                <div className="col-auto">
                  <input type="password" name="userPassword" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" value={inputs.userPassword}/>
                </div>
               </div>
                  <br />
                  <div className="row g-3 align-items-center">
                   <div className="col-auto">
                    <label htmlFor="inputPassword6" className="col-form-label">Повторите пароль</label>
                   </div>
                <div className="col-auto">
                  <input type="password" name="userPassword" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" value={inputs.userPassword}/>
                </div>
               </div>
               <br />
               <div className="container"> 
               <button type="submit" className="btn btn-outline-primary">Submit</button>
               </div>
              </div>
        </div>
    );
};

export default Registration;
