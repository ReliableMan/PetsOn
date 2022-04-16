import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom'
import axios from "axios";
import "./profile.css";

export default function Profile() {

  const [user, setUser] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3903/users/profile/${id}`).then((userData) => {
      const { username, email, first_name, last_name, date_birth, role, photo, description } = userData.data;
      // console.log(email, "emaaaaaaaaaaaail");
      setUser({ username, email, first_name, last_name, date_birth, role, photo, description })
    });
  }, [id]);

  return (
    <>
      <div className="profile">
        <div className="user-info-container">
          <div className="heading">ЛИЧНЫЙ КАБИНЕТ</div>
          <div className="user-info">
            <div className="photo-container">
              <img className="photo"
                src={user.photo}
                alt="user" width="" height="" />
            </div>
            <div className="user-info-text">
              <p>Логин</p>
              <p>{user.username}</p>
              <p>Email</p>
              <p>{user.email}</p>
              <p>Имя</p>
              <p>{user.first_name}</p>
              <p>Фамилия</p>
              <p>{user.last_name}</p>
              <p>ДАТА РОЖДЕНИЯ</p>
              <p>{user.date_birth}</p>
              <p>Роль</p>
              <p>{user.role}</p>
              <p>description</p>
              <p>{user.description}</p>
              <button className="btn-change-data">
                <Link className="btn-change-data-link" to="/profile/edit">ИЗМЕНЕНИТЬ ДАННЫЕ</Link>
              </button>
            </div>
          </div>
        </div>

        <div className="user-services">
          <div className="heading">МОИ ЗАЯВКИ И УСЛУГИ</div>
          <div className="myServices">
            <table className="container">
              <thead>
                <tr>
                  <th>СТАТУС</th>
                  <th>НАЗВАНИЕ</th>
                  <th>СТОИМОСТЬ</th>
                  <th>ДАТА СОЗДАНИЯ</th>
                </tr>
              </thead>
              {/* тут надо тянуть данные из бд, services */}
              {/* заготовка */}
              <tbody>
                <tr className="table-row">
                  <td>в процессе</td>
                  <td>выгулять Бобика</td>
                  <td>100</td>
                  <td>Created at</td>
                </tr>
                <tr className="table-row">
                  <td>в процессе</td>
                  <td>выгулять Бобика</td>
                  <td>100</td>
                  <td>Created at</td>
                </tr>
              </tbody>
              <tfoot>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

