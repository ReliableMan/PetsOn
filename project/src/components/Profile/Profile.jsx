import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import "./profile.css";

export default function Profile() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3903/profile").then((data) => {
      console.log(data);

      // const arr = [];
      // allData.data.forEach((i) => arr.push(i.title));
      // console.log("7777777", allData.data);
      // setData(allData.data);
    });
  }, []);

  return (
    <div className="profile">
      <div className="user-info-container">
        <div className="heading">ЛИЧНЫЙ КАБИНЕТ</div>
        <div className="user-info">
          <div className="photo-container">
            <img className="photo"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.hFpyV8YrShUEkGGrBcEEtQAAAA%26pid%3DApi&f=1" 
            alt="user" width="" height="" />
          </div>
          <div className="user-info-text">
            <p>ФИО</p>
            <p>{}</p>
            <p>{}</p>
            <p>Обо мне</p>
            <p>{}</p>
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
  )
}

