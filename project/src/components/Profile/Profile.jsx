import React from 'react'
import { Link } from 'react-router-dom'
import "./profile.css";

export default function Profile() {

  return (
    <>
      <h2>ЛИЧНЫЙ КАБИНЕТ</h2>
      <div className="container d-flex my-3">
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.hFpyV8YrShUEkGGrBcEEtQAAAA%26pid%3DApi&f=1" alt="" width="" height="" />
        <div className="container">
          <p>ФИО</p>
          <p>Обо мне</p>
          <button>
            <Link to="/profile/edit">Изменить данные</Link>
          </button>
        </div>
      </div>
        
      <h2>МОИ ЗАЯВКИ И УСЛУГИ</h2>
      <table className="container">
        <tr>
          <th>СТАТУС</th>
          <th>НАЗВАНИЕ</th>
          <th>СТОИМОСТЬ</th>
          <th>ДАТА СОЗДАНИЯ</th>
        </tr>
        {/* тут надо тянуть данные из бд, services */}
        {/* заготовка */}
        <tr>
          <td>в процессе</td>
          <td>выгулять Бобика</td>
          <td>100</td>
          <td>Created at</td>
        </tr>
        <tr>
          <td>в процессе</td>
          <td>выгулять Бобика</td>
          <td>100</td>
          <td>Created at</td>
        </tr>
      </table>
    </>
  )
}

