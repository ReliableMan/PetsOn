import React from 'react';
// { useEffect }
import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from "react-redux";

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" to="/">картинка петсОн</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/cat">Статьи</Link>
        </li>
      </ul>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/cat">Услуги</Link>
        </li>
      
      </ul>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/cat">О нас</Link>
        </li>
      </ul>
    </div>
  </div>
  <Link className="nav-link" to="sign">Лапка</Link>
</nav>
    </>
  )
}