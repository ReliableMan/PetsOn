import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"

export default function Navbar({id}) {
  return (

    <div className='container'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img src="images/PetsOn.png" alt="logoPet" style={{ width: '7rem' }} /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/posts">СТАТЬИ</Link>
              </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/services/form">УСЛУГИ</Link>
              </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/about">О НАС</Link>
              </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={`/users/profile/${id}`}>ЛИЧНЫЙ КАБИНЕТ</Link>
              </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="textReg" to="/signup"><img src="images/paw.png" alt="logo" style={{ width: '4rem' }} />Нажми, чтобы <br></br> зарегистрироваться</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
