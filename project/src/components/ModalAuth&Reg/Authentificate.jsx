import React from 'react';
// import { useEffect, useState } from 'react';
import './modal.css'
// import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userTypingLogin, clearInputs, submitUserLogin } from '../../redux/actions/userActions';


const Authentificate = () => {
  // const [name, setName] = useState(null)
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
  // useEffect( () => {
  //   window.gapi.load('auth2', function() {
  //    window.gapi.auth2.init({
  //      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  //    }).then(() => console.log('init OK'), () => console.log('init ERR'))
  //   })
  // },[]);

  // const googleHandler = () => {
  //   const authOk = googleUser => {
  //     console.log('Auth OK')
  //     setName(googleUser.getBasicProfile().getName());
  //   }
  //   const authErr = () => console.log('Auth Err')

  //   const auth = window.gapi.auth2.getAuthInstance();

  //   auth.signIn({
  //     scope: 'profile email'
  //   }).then(authOk, authErr)
  // }
    return (
        <div className='container'>
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
                  onChange={event => dispatch(userTypingLogin(event))} />
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
                  onChange={event => dispatch(userTypingLogin(event))} />

                </div>
               </div>
               <br />
               <div className="container"> 
               <button type="submit" className="btn btn-outline-primary live">Войти</button>
               </div>
               <hr/>
               {/* <div className="container"> 
               <p>Войти с помощью Google</p>
               <button onClick={googleHandler} className="btn btn-outline-primary live">Google</button>
               </div> */}
               </form>
              </div>
    );
};

export default Authentificate;
