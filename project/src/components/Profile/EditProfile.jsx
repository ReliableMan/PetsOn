import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./profile.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearUserUpdateServices,
  userUpdateService,
  updateUser,
} from "../../redux/actions/userActions";

export default function EditProfile() {
  const [user, setUser] = useState([]);
  const { id } = useParams();
  const [role, setRole] = useState("");

  // useEffect(() => {
  //   axios.get(`http://localhost:3903/users/profile/${id}/edit`).then((userData) => {
  //     const { username, email, first_name, last_name, date_birth, role, photo, description } = userData.data;
  //     // console.log(email, "emaaaaaaaaaaaail");
  //     setUser({ username, email, first_name, last_name, date_birth, role, photo, description })
  //   });
  // }, [id]);

  const inputs = useSelector((store) => store.userServices);
  //console.log(inputs, 'inputs');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeValue = (e) => {
    setRole(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    
    //console.log("inputs", inputs);
    //dispatch(userUpdateService({inputs}));
    dispatch(updateUser(inputs, id))
    dispatch(clearUserUpdateServices());
    navigate(`/users/profile/${id}`);
  };

  return (
    <div className="edit-profile">
      <form onSubmit={submitHandler}>
        <h1 className="heading">ИЗМЕНЕНИЕ ДАННЫХ</h1>
        <div className="name-birth-role-container">
          <div className="name-container">
            <div>
              <label htmlFor="email" className="form-label">
                EMAIL
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="form-input"
                placeholder={user.email}
                value={inputs.email}
                onChange={(e) => dispatch(userUpdateService(e))}
              />
            </div>
            <div>
              <label htmlFor="password" className="form-label">
                ПАРОЛЬ
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-input"
                placeholder={user.password}
                value={inputs.password}
                onChange={(e) => dispatch(userUpdateService(e))}
              />
            </div>
            <div>
              <label htmlFor="firstName" className="form-label">
                ИМЯ
              </label>
              <input
                type="text"
                id="firstName"
                name="name"
                className="form-input"
                value={inputs.name}
                onChange={(e) => dispatch(userUpdateService(e))}
              />
            </div>
            <div>
              <label htmlFor="surname" className="form-label">
                ФАМИЛИЯ
              </label>
              <input
                type="text"
                id="surname"
                name="userSurname"
                className="form-input"
                value={inputs.userSurname}
                onChange={(e) => dispatch(userUpdateService(e))}
              />
            </div>
          </div>
          <div className="birth-role-container">
            <div>
              <label htmlFor="birthday" className="form-label">
                ДАТА РОЖДЕНИЯ
              </label>
              <input
                type="date"
                min="1960-01-01"
                max="2020-12-31"
                id="birthday"
                name="birthday"
                className="form-input"
                value={inputs.birthday}
                onChange={(e) => dispatch(userUpdateService(e))}
              />
            </div>
            {/* <div>
              <label htmlFor="role" className="form-label">
                РОЛЬ
              </label>
              <select
                className="select-role"
                name="role"
                id="role"
                onClick={changeValue}
                value={user.role}
              >
                <option value="user">Пользователь</option>
                <option value="specialist">Специалист</option>
              </select>
            </div> */}
          </div>
        </div>
        <div>
          <label htmlFor="aboutMe" className="form-label">
            РЕДАКТИРОВАТЬ ОПИСАНИЕ
          </label>
          <textarea
            type="text"
            id="aboutMe"
            name="aboutMe"
            className="form-textarea"
            value={inputs.aboutMe}
            onChange={(e) => dispatch(userUpdateService(e))}
          ></textarea>
        </div>
        <div className="btn-save-changes-container">
          <button type="submit" className="btn-save-changes">
            СОХРАНИТЬ ИЗМЕНЕНИЯ
          </button>
        </div>
      </form>
    </div>
  );
}
