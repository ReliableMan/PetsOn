import React from "react";
import "./mainPage.css";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="mainPage">
      <h1 className="text_title">Сделано с заботой о животных</h1>
      <h1 className="text_main">
        Комфортная среда для животных и их владельцев
      </h1>
      <a className="catdog">
        <img src="images/main.png" alt="logoMain" style={{ width: "15rem" }} />
      </a>
      <div className="ContsinerTitleOurServices">
      <p className="titleOurServices">Наши услуги</p>
      </div>
      <div className="container_link">
        <Link className="card" to="/services">
          <img src="images/walk.png" alt="logoCard" />
        </Link>
        <Link className="card" to="/vet">
          <img src="images/vet.png" alt="logoCard" />
        </Link>
        <Link className="card" to="/services">
          <img src="images/groom.png" alt="logoCard" />
        </Link>
        <Link className="card" to="/services">
          <img src="images/other.png" alt="logoCard" />
        </Link>
      </div>
    <div className="findServMain">
        <Link  to="/services">
          <img className="findServ" src="images/btnFind.png" alt="findServ" />
        </Link>
    </div>
      {/* <button><Link to="/findServ">НАЙТИ УСЛУГУ</Link></button> */}
      <div className="container_friend">
      <a href="https://www.friendforpet.ru" >
          <img className="findAFriend" src="images/findAFriend.png" alt="logofindAFriend" />
      </a> 
        {/* <img
          src="images/fri.jpeg"
          alt="logoFriend"
          style={{ width: "20rem" }}
        /> */}
        {/* <p>Возьми себе друга</p>
        <button>
          <a href="https://www.friendforpet.ru" >
            Найти друга
          </a>
        </button> */}
      </div>
      <footer>
          <div className="newsletter">
            <p className="textNewsletter">Подпишись на рассылку новостей</p>
            <div className="btnAndInputNewsletter">
              <input className="inpytNewsletter" />
            <button className="btnNewsletter">Подписаться</button>
            </div>
          </div>
        <div className="footer_body">
          <div>
            <img className="footer_img"
              src="images/cute.png"
              alt="logoFooter"
              style={{ width: "10rem" }}
            />
          </div>
          <div className="footer_links1">
            <Link className="textFooterLinks" to="/about">О НАС</Link>
            <Link className="textFooterLinks" to="/posts">СТАТЬИ</Link>
            <Link className="textFooterLinks" to="/services">УСЛУГИ</Link>
          </div>

          <div className="footer_links2">
            <Link className="textFooterLinks" to="/profile">ЛИЧНЫЙ КАБИНЕТ</Link>
            <a className="textFooterLinks" href='https://support.google.com/chrome/answer/95647?hl=ru&co=GENIE.Platform%3DDesktop'>НАСТРОЙКИ ФАЙЛОВ COOKIE</a>
            <a className="textFooterLinks" href="https://webelement.ru/user_agreement/">ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ </a>
          </div>
        </div>

        
      </footer>
    </div>
  );
}
