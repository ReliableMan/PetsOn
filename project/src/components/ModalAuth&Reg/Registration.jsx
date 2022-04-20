import React, { useState } from 'react';
import './register.css';
// import RegType from './RegType';

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userTyping, clearInputs, submitUser, specInputs } from '../../redux/actions/userActions';
// 

const Registration = () => {

  const [value, setValue] = useState('');
  //console.log('=====1', value)

  const [value1, setValue1] = useState('');
  //console.log('+++++1', value1)

  const inputs = useSelector(store => store.signUpInputs);
  const select = useSelector(store => store.userSpeciality)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const choice1 = (e) => {
    setValue(e.target.value)
  };

  const choice2 = (e) => {
    setValue1(e.target.value)
  };

  //  отслеживать изменения инпутов при вводе данных
  const changeHandler = (e) => {
    dispatch(userTyping(e))
  }

  // записать данные и диспатчом отправить на бэк и записать 
  const submitHandler = async (e) => {
    e.preventDefault();
    if (inputs.userPassword === inputs.userPasswordRepeat) {
      dispatch(submitUser({ inputs, value, value1 }));
      dispatch(specInputs({ select, value, value1 }));
      dispatch(clearInputs());
      navigate('/')
    } else {
      alert('Вы неправильно ввели пароль, попробуйте снова.')
    }
  }

  return (
    <div className='container header register'>
      <form onSubmit={submitHandler}>
        <div className='header1'>
          <p> Регистрация ||| <Link to='/login'>Авторизация</Link></p>
        </div>
        <div className="inputs-container">
          {/* //* -----------------------------------------------------------------------------Логин */}
          <div className="">
            <div className="col-auto">
              <label htmlFor="inputLogin" className="col-form-label">Логин</label>
            </div>
            <div className="col-auto input-group-sm">
              <input type="text" name="userName" id="inputUserName"
                className="form-control" value={inputs.userName ?? ''} onChange={changeHandler}
                pattern="[A-Za-z]\w+" required />
            </div>
          </div>
          <br />
          {/* //* -----------------------------------------------------------------------------Email */}
          <div className="">
            <div className="col-auto">
              <label htmlFor="inputEmail6" className="col-form-label">Email</label>
            </div>
            <div className="col-auto input-group-sm">

              <input type="email" name="userEmail" id="inputUserEmail" placeholder='example@email.com'
                className="form-control" value={inputs.userEmail ?? ''} onChange={changeHandler}
                pattern="^[A-Z0-9a-z._%+-]+@[A-Z0-9a-z.-]+\.[A-Za-z]{2,}$" required />
            </div>
          </div>
          <br />
        </div>

        <div className="inputs-container">
          {/* //* -----------------------------------------------------------------------------Пароль */}
          <div className="">
            <div className="col-auto">
              <label htmlFor="inputPassword6" className="col-form-label">Пароль</label>
            </div>
            <div className="col-auto input-group-sm">
              <input type="password" name="userPassword" id="inputUserPassword"
                className="form-control" value={inputs.userPassword ?? ''} onChange={changeHandler}
                required />
            </div>
          </div>
          <br />
          {/* //* -----------------------------------------------------------------------------Повторите пароль */}
          <div className="">
            <div className="col-auto">
              <label htmlFor="inputPassword6" className="col-form-label">Повторите пароль</label>
            </div>
            <div className="col-auto input-group-sm">
              <input type="password" name="userPasswordRepeat" id="inputUserPasswordRepeat"
                className="form-control" value={inputs.userPasswordRepeat ?? ''} onChange={changeHandler} />
            </div>
          </div>
          <br />
        </div>
        <div className="inputs-container">
          {/* //* -----------------------------------------------------------------------------Фамилия */}
          {/* <div className="row align-items-center"> */}
          <div className="">
            <div className="col-auto">
              <label htmlFor="inputLogin" className="col-form-label">Фамилия</label>
            </div>

            <div className="col-auto input-group-sm">
              <input type="text" name="userSurname" id="inputUserSurname"
                className="form-control inpSurname" value={inputs.userSurname ?? ''} onChange={changeHandler}
                required />
            </div>
          </div>
          <br />
          {/* //* -----------------------------------------------------------------------------Имя */}
          <div className="">
            <div className="col-auto">
              <label htmlFor="inputLogin" className="col-form-label">Имя</label>
            </div>

            <div className="col-auto input-group-sm">
              <input type="text" name="name" id="name"
                className="form-control inpSurname" value={inputs.name ?? ''} onChange={changeHandler}
                required />
            </div>
          </div>
          <br />
        </div>

        <div className="category-container">

          {/* //* -----------------------------------------------------------------------------Тип учётной записи */}
          <div className="">
            <div className="col-auto">
              <label htmlFor="inputLogin" className="col-form-label">Тип учётной записи</label>
            </div>
            {/* //! обработать и записать в базу */}
            <div className="col-auto input-group-sm">
              <select onClick={choice1} name="typeUser"
                className="form-select" aria-label="Default select example">
                <option value=''>Выберите из списка</option>
                <option value="Пользователь">Пользователь</option>
                <option value="Специалист">Специалист</option>
              </select>
            </div>
          </div>
          {value === "Специалист" ?
            <>
              <div className="">
                <div className="col-auto">
                  <label htmlFor="inputLogin" className="col-form-label"
                  >Уточните пожалуйста</label>
                </div>
                <div className="col-auto input-group-sm">
                  <select onClick={choice2} name="typeUser1"
                    className="form-select" aria-label="Default select example">
                    <option value=''>Не выбрано</option>
                    <option value="Выгул домашних животных">Выгул домашних животных</option>
                    <option value="Стрижка домашних животных">Стрижка домашних животных</option>
                    <option value='Другое'>Другое</option>
                  </select>
                </div>
              </div>
            </> : null}
          <br />
        </div>
       
        {/* //* -----------------------------------------------------------------------------Дата рождения */}
        <div className="birth-container">
          <div className="col-auto">
            <label htmlFor="start" className="col-form-label">Дата рождения</label>
          </div>

          <div className="col-auto input-group-sm">
            <input type="date" name="birthday" min="1960-01-01" max="2020-12-31"
              className="birth-input" value={inputs.birthday ?? ''} onChange={changeHandler}
              required />
          </div>
        </div>
        <br />
        
        {/* //* -----------------------------------------------------------------------------Войти */}
        <div className="button-container">
          <button type="submit" className="btn btn-outline-primary live">Войти</button>
        </div>
      </form>

    </div>

  );
};

export default Registration;

