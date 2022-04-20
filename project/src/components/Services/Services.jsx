import React, {useEffect, useState} from 'react';
import "./services.css";

import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userTypingService, clearInputsServices, serviceSent } from "../../redux/actions/userActions";



export default function Services() {



  const [service, setService] = useState('');
  const { id } = useParams();

  const choice1 = (e) => {
    //console.log('работает', e.target.value)
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
    navigate(`/findServ`);
  } 
    
  useEffect(()=>{
    dispatch(clearInputsServices());
  },[])



  return (
    <div className="services">
      <form onSubmit={submitHandler}>
        <h1 className="heading">ОСТАВЬТЕ ЗАЯВКУ НА УСЛУГУ</h1>
        <div className="input-container">
          <label htmlFor="serviceTitle" className="form-label">НАЗВАНИЕ УСЛУГИ</label>
          <input type="text" name="title" id="serviceTitle"
            className="form-input" required="required" value={inputs.title ?? ""}
            onChange={changeHandler} placeholder="Введите название вашей услуги" />
        </div>
        <div div className="input-container">
          <label htmlFor="serviceCategory" className="form-label">КАТЕГОРИЯ</label>
          <select className="select-category" name="serviceCategory" id="serviceCategory"
            onClick={choice1}>
            <option value="walk">ВЫГУЛ</option>
            <option value="grooming">ГРУМИНГ</option>
            <option value="other">ДРУГОЕ</option>
          </select>
        </div>
        <div div className="input-container">
          <label htmlFor="servicePrice" className="form-label">СТОИМОСТЬ</label>
          <input type="number"
            min="0" max="10000" step="1"
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

        <div className="input-container">
          <label htmlFor="serviceTitle" className="form-label">ПОДРОБНОЕ ОПИСАНИЕ</label>
          <textarea id="serviceDescription" name="description" className="form-textarea"
            placeholder="Не забудьте оставить контактный номер телефона"
            rows="4" cols="50" value={inputs.description ?? ""}
            onChange={changeHandler}>
          </textarea>
        </div>
        <div className="btn-submit-container">
          <button type="submit" className="btn-submit live">СОЗДАТЬ</button>
        </div>
      </form>
    </div>
  )
}

