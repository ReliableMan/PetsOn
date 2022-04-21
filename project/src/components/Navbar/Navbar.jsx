import React from "react";
import { useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { logoutUser, setUser } from "../../redux/actions/userActions";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sunMode, moonMode } from "../../redux/actions/userActions";
import "./navbar.css";


export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const booleanAuthorized = useSelector((store) => store.isAuthorized);
  const dark = useSelector((store) => store.darkMode);

  const { id } = useParams();
  // console.log ('id', user.id)

  useEffect(() => {
    const json = localStorage.getItem("site-dark-mode");
    const currentMode = JSON.parse(json);
    if (currentMode) {
      dispatch(sunMode());
    } else {
      dispatch(moonMode());
    }
  }, [dispatch]);

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    const json = JSON.stringify(dark);
    localStorage.setItem("site-dark-mode", json);
  }, [dark]);


  const logoutHandle = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
    dispatch(setUser());
    navigate("/main");
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="images/PetsOn.png"
              alt="logoPet"
              style={{ width: "7rem" }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">

                <Link className="nav-link" aria-current="page" to="/posts">
                  СТАТЬИ
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/services">
                  УСЛУГИ
                </Link>

              </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to={`/users/profile/${user.id}`}
                >
                  ЛИЧНЫЙ КАБИНЕТ
                </Link>
              </li>
            </ul>
            { dark ? 
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <img className="icon" aria-hidden="true" onClick={() => dispatch(moonMode())} src="//yastatic.net/weather/i/icons/funky/dark/skc_d.svg" />
              </li>
            </ul>

            : 

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <img className="icon" aria-hidden="true" onClick={() => dispatch(sunMode())} src="//yastatic.net/weather/i/icons/funky/dark/skc_n.svg" />
              </li>
            </ul> 
             }


            { booleanAuthorized ?
            // если true - то выходим
             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             <li className="nav-item">
               <Link className="textReg" to="/signout" onClick={logoutHandle}>
                 <img
                   src="images/paw.png"
                   alt="logo"
                   style={{ width: "4rem" }}
                 />
                 Нажми, чтобы <br></br> выйти
               </Link>
             </li>
           </ul>  
           
           :
           // если false - то заходим
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="textReg" to="/signup">
                  <img
                    src="images/paw.png"
                    alt="logo"
                    style={{ width: "4rem" }}
                  />
                  Нажми, чтобы <br></br> зарегистрироваться
                </Link>
              </li>
            </ul>
            }
          </div>
        </div>
      </nav>
    </div>
  );
}
