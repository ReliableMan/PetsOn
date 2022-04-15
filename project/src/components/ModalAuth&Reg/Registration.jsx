import React from 'react';
import './styleRegister.css';
import { Link, useNavigate } from 'react-router-dom';
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
        <div className='container register'>
              <form onSubmit={submitHandler}>
                <div className='header1'>
             <p> Регистрация ||| <Link to='/signIn'>Авторизация</Link></p>  
                </div>

                <div className="row align-items-center">
                   <div className="col-auto">
                    <label htmlFor="inputLogin" className="col-form-label">Фамилия</label>
                   </div>
                   
                <div className="col-auto input-group-sm inpSur">
                  <input type="text" name="userSurname" id="inputUserSurname" 
                  className="form-control inpSurname" value={inputs.userSurname ?? ''} onChange={changeHandler} 
                   required/>
                </div>
               </div>
               <br/>

               <div className="row align-items-center">
                   <div className="col-auto">
                    <label htmlFor="inputLogin" className="col-form-label label2">Имя</label>
                   </div>
                   
                <div className="col-auto input-group-sm inpSur">
                  <input type="text" name="name" id="inputUserSurname" 
                  className="form-control inpSurname" value={inputs.name ?? ''} onChange={changeHandler} 
                   required/>
                </div>
               </div>
               <br/>

               <div className="row align-items-center">
                   <div className="col-auto">
                    <label htmlFor="start" className="col-form-label">Дата рождения</label>
                   </div>
                   {/* //! обработать и записать в базу */}
                <div className="col-auto input-group-sm inpSur">
                  <input type="date"  name="birthday" min="1960-01-01" max="2020-12-31"
                  className="" onChange={changeHandler} 
                   required/>
                </div>
               </div>
               <br/>

               <div className="row align-items-center">
                   <div className="col-auto">
                    <label htmlFor="inputLogin" className="col-form-label">Тип учётной записи</label>
                   </div>
                   {/* //! обработать и записать в базу */}
                <div className="col-auto input-group-sm inpSur">
                <select class="form-select" aria-label="Default select example">
                      <option disabled>Выберите из списка</option>
                       <option value="user">Пользователь</option>
                       <option value="specialist">Специалист</option>
                       {/* // ! тернарное выражение  */}
                       {/* записывать в стейт значение выбранного value
                         в звисимости от того что выбрали, рендерим компонент
                         
                         можно тернаркой */}
                         {/* 1) отловить все onChange 
                         2) записывать в стейт (местный стейт) 
                         3) */}
                      </select>
                </div>
               </div>
               <br/>



                <div className="row align-items-center">
                   <div className="col-auto">
                    <label htmlFor="inputLogin" className="col-form-label">Логин</label>
                   </div>
                <div className="col-auto input-group-sm">
                  <input type="text" name="userName" id="inputUserName" 
                  className="form-control inpName" value={inputs.userName ?? ''} onChange={changeHandler} 
                  pattern="[A-Za-z]\w+" required/>
                </div>
               </div>

               <br/>
               <div className="row align-items-center">
                   <div className="col-auto">
                    <label htmlFor="inputEmail6" className="col-form-label">Email</label>
                   </div>
                <div className="col-auto input-group-sm">
                  
                  <input type="email" name="userEmail" id="inputUserEmail" 
                  className="form-control inpEmail" value={inputs.userEmail ?? ''} onChange={changeHandler}
                  pattern="^[A-Z0-9a-z._%+-]+@[A-Z0-9a-z.-]+\.[A-Za-z]{2,}$" required/>
                </div>
               </div>

                    <br/>
                    <div className="row align-items-center">
                   <div className="col-auto">
                    <label htmlFor="inputPassword6" className="col-form-label">Пароль</label>
                   </div>
                <div className="col-auto input-group-sm">
                  <input type="password" name="userPassword" id="inputUserPassword" 
                  className="form-control inpPass" value={inputs.userPassword ?? ''} onChange={changeHandler}
                  required/>
                </div>
               </div>

                  <br />
                  <div className="row align-items-center">
                   <div className="col-auto">
                    <label htmlFor="inputPassword6" className="col-form-label">Повторите пароль</label>
                   </div>
                <div className="col-auto input-group-sm">
                <input type="password" name="userPasswordRepeat" id="inputUserPasswordRepeat" 
                  className="form-control" value={inputs.userPasswordRepeat ?? ''} onChange={changeHandler}/>
                </div>
               </div>
               <br />
               <div className="col-auto input-group-sm">

               </div>



               <div className="container but"> 
               <button type="submit" className="btn btn-outline-primary live">Войти</button>
               </div>
               </form>
              </div>
        
    );
};

export default Registration;
