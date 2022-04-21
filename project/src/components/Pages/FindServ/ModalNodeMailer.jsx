import React from 'react'
import "./findServ.css";
import { useNavigate } from "react-router-dom";

 const ModalNodeMailer = ({active, setActive}) => {
  const navigate = useNavigate();

  const navigateHadler = () => {

     navigate(`/`);

  };


  return (

    <div className={active ? "modal active": "modal"} onClick={() => setActive(false)}>
    <div className={active ? "modelContent active": "modelContent"} 
    onClick={(e) => e.stopPropagation()}>
<form className="row g-3 modalLittle">
  <div className="col-auto">
    <p>*Введите e-mail для <br></br> связи с заказчиком</p>
  </div>
  <div className="col-auto">
    <label htmlFor="inputPassword2" className="visually-hidden">Email</label>
    <input type="Email" className="form-control" id="inputPassword2" placeholder="Email"/>
  </div>
  <div className="col-auto">
    <button type="submit" className="btn btn-light " onClick={navigateHadler}>Отправить</button>
  </div>
</form>
</div>
</div>

  )
}

export default ModalNodeMailer;
