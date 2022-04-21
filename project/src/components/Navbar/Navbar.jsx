import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, setUser } from "../../redux/actions/userActions";
import "./navbar.css";
import "../../App.css"


export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const booleanAuthorized = useSelector((store) => store.isAuthorized);
  const { id } = useParams(); // ?
  // console.log ('id', user.id)

  const logoutHandle = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
    dispatch(setUser());
    navigate("/main");
  };

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const json = localStorage.getItem("site-dark-mode");
    const currentMode = JSON.parse(json);
    if (currentMode) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    const json = JSON.stringify(darkMode);
    localStorage.setItem("site-dark-mode", json);
  }, [darkMode]);

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
                    <Link className="nav-link" aria-current="page" to="/services/form">
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
                {booleanAuthorized ?
              // если true - то выходим
              <>
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
              </>

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
            <button className="light-mode-button"
              onClick={() => setDarkMode(!darkMode)}>
              <span></span>
              <span></span>
            </button>
            {/* <h1 className="dark-mode-label">Темная тема</h1> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
