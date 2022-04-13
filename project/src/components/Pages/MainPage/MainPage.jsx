import React from "react";
import "./mainPage.css";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="mainPage">
      <div className="text_title">Сделано с заботой о животных</div>
      <div className="text_main">
        Комфортная среда для животных и их владельцев
      </div>
      <a className="catdog">
        <img src="images/main.png" alt="logoMain" style={{ width: "12rem" }} />
      </a>
      <p>Наши услуги</p>
      <div className="container_link">
        <Link className="card" to="/services/walking">
          <img src="images/walk.png" alt="logoCard" />
        </Link>
        <Link className="card" to="/vet">
          <img src="images/vet.png" alt="logoCard" />
        </Link>
        <Link className="card" to="/services/grooming">
          <img src="images/groom.png" alt="logoCard" />
        </Link>
        <Link className="card" to="/services/other">
          <img src="images/other.png" alt="logoCard" />
        </Link>
      </div>
      <button><Link to="/findServ">НАЙТИ УСЛУГУ</Link></button>
      <div className="container_friend">
        <img
          src="images/fri.jpeg"
          alt="logoFriend"
          style={{ width: "20rem" }}
        />
        <p>Возьми себе друга</p>
        <button>
          <a href="https://www.friendforpet.ru" >
            Найти друга
          </a>
        </button>
      </div>
      <footer>
        <p>Подпишись на рассылку новостей</p>
        <input />
        <button>Подписаться</button>
        <div className="footer_body">
        <img
          src="images/cute.png"
          alt="logoFooter"
          style={{ width: "10rem" }}
        />
        <Link to="/about">О НАС</Link>
        <Link to="/post">СТАТЬИ</Link>
        <Link to="/services">УСЛУГИ</Link>
        <Link to="/profile">ЛИЧНЫЙ КАБИНЕТ</Link>
        <Link to="/cookie">НАСТРОЙКИ ФАЙЛОВ COOKIE</Link>
        <Link to="/idk">ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ</Link>
        </div>
      </footer>
    </div>
  );
}
