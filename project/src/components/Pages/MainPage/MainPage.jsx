import React from "react";
import "./mainPage.css";

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
      <div className="container_link">
        <p>Наши услуги</p>
        <div className="card">
        
        </div>
      </div>
      <button>Найти услуги</button>
    </>
  );
}
