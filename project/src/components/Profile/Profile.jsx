import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom'
import axios from "axios";
import "./profile.css";

export default function Profile() {

  const [user, setUser] = useState([]);
  const { id } = useParams();
  console.log ('id', id)

  useEffect(() => {
    axios.get(`http://localhost:3903/users/profile/${id}`).then((userData) => {
      const { username, email, first_name, last_name, date_birth, role, photo, description } = userData.data;
      setUser({ username, email, first_name, last_name, date_birth, role, photo, description })
    });
  }, [id]);

  return (
    <>
      <div className="profile">
        <div className="user-info-container">
          <h1 className="heading">ЛИЧНЫЙ КАБИНЕТ</h1>
          <div className="user-info">
            <div className="user-info-container">
              <p className="user-info-label">Логин</p>
              <p className="user-info-data">{user.username}</p>
              <p className="user-info-label">Email</p>
              <p className="user-info-data">{user.email}</p>
              <p className="user-info-label">ФИО</p>
              <p className="user-info-data">{user.first_name} {user.last_name}</p>
              <p className="user-info-label">Дата рождения</p>
              <p className="user-info-data">{user.date_birth}</p>
              <p className="user-info-label">Роль</p>
              <p className="user-info-data">{user.role}</p>
              <p className="user-info-label">Обо мне</p>
              <p className="user-info-data">{user.description}</p>
            </div>
            <div className="photo-btn-container">
              <img className="photo"
                // src={user.photo}
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.stack.imgur.com%2FHQwHI.jpg&f=1&nofb=1"
                alt="user" width="" height="" />
                 
              <input type="file" id="myPhoto" name="myPhoto" className="change-photo" />
              <button className="btn-change-data">
                <Link className="btn-change-data-link" to="/users/profile/:id/edit">ИЗМЕНЕНИТЬ ДАННЫЕ</Link>
              </button>
            </div>
          </div>
        </div>

        <div className="user-services">
          <h1 className="heading">МОИ ЗАЯВКИ И УСЛУГИ</h1>
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

