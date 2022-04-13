import React from 'react';
import './modal.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userTyping, clearInputs, submitUser  } from '../../redux/actions/userActions';
// 

const Registration = ({ active, setActive }) => {
  const inputs = useSelector(store => store.signUpInputs);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //  отслеживать изменения инпутов при вводе данных
  const changeHandler = (e) => {
    dispatch(userTyping(e))
  }
  // записать данные и диспатчом отправить на бэк и записать 
  const submitHandler = async (e) => {
    e.preventDefault();
    if(inputs.userPassword === inputs.userPasswordRepeat ){
      dispatch(submitUser(inputs));
      dispatch(clearInputs());
      navigate('/')
    } else {
      alert('Вы неправильно ввели пароль, попробуйте снова.')
    }
  }

    return (
        <div className={active ? "modal active": "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modelContent active": "modelContent"} onClick={(e) => e.stopPropagation()}>
              <form onSubmit={submitHandler}>
              <p> Регистрация</p>

                <div className="row g-3 align-items-center">
                   <div className="col-auto">
                    <label htmlFor="inputLogin" className="col-form-label">Логин</label>
                   </div>
                <div className="col-auto">
                  <input type="text" name="userName" id="inputUserName" 
                  className="form-control" value={inputs.userName ?? ''} onChange={changeHandler} 
                  pattern="[A-Za-z]\w+" required/>
                </div>
               </div>

               <br/>
               <div className="row g-3 align-items-center">
                   <div className="col-auto">
                    <label htmlFor="inputEmail6" className="col-form-label">Email</label>
                   </div>
                <div className="col-auto">
                  <input type="email" name="userEmail" id="inputUserEmail" 
                  className="form-control" value={inputs.userEmail ?? ''} onChange={changeHandler}
                  pattern="^[A-Z0-9a-z._%+-]+@[A-Z0-9a-z.-]+\.[A-Za-z]{2,}$" required/>
                </div>
               </div>

                    <br/>
                    <div className="row g-3 align-items-center">
                   <div className="col-auto">
                    <label htmlFor="inputPassword6" className="col-form-label">Пароль</label>
                   </div>
                <div className="col-auto">
                  <input type="password" name="userPassword" id="inputUserPassword" 
                  className="form-control" value={inputs.userPassword ?? ''} onChange={changeHandler}
                  required/>
                </div>
               </div>

                  <br />
                  <div className="row g-3 align-items-center">
                   <div className="col-auto">
                    <label htmlFor="inputPassword6" className="col-form-label">Повторите пароль</label>
                   </div>
                <div className="col-auto">
                <input type="password" name="userPasswordRepeat" id="inputUserPasswordRepeat" 
                  className="form-control" value={inputs.userPasswordRepeat ?? ''} onChange={changeHandler}/>
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

export default Registration;
