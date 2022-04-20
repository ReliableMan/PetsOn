import React, {useState} from 'react';
import "./services.css";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {userTypingService, clearInputsServices, serviceSent} from "../../redux/actions/userActions";

 

export default function Services() {

  const [service, setService] = useState('');
  const [component1, setComponent] = useState(false)

  const choice1 = (e) => {
    console.log('работает', e.target.value)
    setService(e.target.value)
  };

  const inputs = useSelector((store) => store.userServices);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeHandler = (e) => {
    dispatch(userTypingService(e))
  }

  const submitHandler = async (e) => {
    e.preventDefault();
      dispatch(serviceSent({inputs, service }));
      dispatch(clearInputsServices());
     // navigate('/main')
    } 

    const componentcom = ()=>{
  setComponent(true)
    }



  return (




    <div className="services">
      <form onSubmit={submitHandler}>
        <div className="heading">ОСТАВЬТЕ ЗАЯВКУ НА УСЛУГУ</div>
        <div className="">
          <label htmlFor="serviceTitle" className="form-label">НАЗВАНИЕ УСЛУГИ</label>
          <input type="text" name="title" id="serviceTitle"
            className="form-input" required="required" value={inputs.title ?? ""}
            onChange={changeHandler}/>
        </div>
        <div className="category-price-currency-container">
          <div>
            <label htmlFor="serviceCategory" className="form-label">КАТЕГОРИЯ</label>
            <select className="select-category" name="serviceCategory" id="serviceCategory" 
            onClick={choice1}>
              <option value="walk">ВЫГУЛ</option>
              <option value="grooming">ГРУМИНГ</option>
              <option value="other">ДРУГОЕ</option>
            </select>
          </div>
          <div>
            <label htmlFor="servicePrice" className="form-label">СТОИМОСТЬ</label>
            <input type="number" min="0" max="10000" step="1"
              name="price" id="servicePrice"
              className="form-input" required="required" value={inputs.price ?? ""}
              onChange={changeHandler} />
          </div>
          {/* <div>
            <label htmlFor="currency" className="form-label">ВАЛЮТА</label>
            <select className="select-currency" name="select-currency" id="currency">
              <option value="ruble">&#8381;</option>
              <option value="dollar">&#36;</option>
              <option value="euro">&euro;</option>
            </select>
          </div> */}
        </div>
        <div className="">
          <label htmlFor="serviceTitle" className="form-label">ПОДРОБНОЕ ОПИСАНИЕ</label>
          <textarea id="serviceDescription" name="description" className="form-textarea"
            rows="4" cols="50" value={inputs.description ?? ""}
            onChange={changeHandler}>
          </textarea>
        </div>
        <div className="btn-submit-container">
           <button type="submit" className="btn-submit" onClick={componentcom} >СОЗДАТЬ</button> 
        </div>
      </form>
      {/* { component1 ? 
<div aria-live="polite" aria-atomic="true" className="d-flex justify-content-center align-items-center w-100">
<div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div className="toast-header">
    <img src="..." className="rounded me-2" alt="..."/>
    <strong className="me-auto">Bootstrap</strong>
    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Закрыть" ></button>
  </div>
  <div className="toast-body">
  Ваша заявка принята!
  </div>
</div>
</div>
: 
 null
} */}
    </div>
  )
}

