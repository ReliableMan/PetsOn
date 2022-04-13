import React from "react";
import "./mainPage.css";
import { Link } from 'react-router-dom';

export default function MainPage() {
  return (
    <>
      <div className="text_title">Сделано с заботой о животных</div>
      <div className="text_main">
        Комфортная среда для животных и их владельцев
      </div>
      <a className="catdog">
        <img src="images/main.png" alt="logoMain" style={{ width: "12rem" }} />
      </a>
        <p>Наши услуги</p>
      <div className="container_link">
        <Link className="card" to="/walking"><img src="images/walk.png" alt="logoCard"/></Link> 
        <Link className="card" to="/vet"><img src="images/vet.png" alt="logoCard"/></Link>
        <Link className="card" to="/groom"><img src="images/groom.png" alt="logoCard"/></Link>
        <Link className="card" to="/other"><img src="images/other.png" alt="logoCard"/></Link>
      </div>
      <button >Найти услуги</button>

      <div className="container_friend"></div>
    </>
  );
}
