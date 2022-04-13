import React from 'react'

export default function Profile() {
  return (
    <div>
      <div>
        <h1>
          ЛИЧНЫЙ КАБИНЕТ
        </h1>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.hFpyV8YrShUEkGGrBcEEtQAAAA%26pid%3DApi&f=1" alt="" width="" height="" />
        <div>
          <p>ФИО</p>
          <p>Обо мне</p>
          <button type="button">Изменить данные</button>
        </div>
      </div>
      <div>
        <h1>
          МОИ ЗАЯВКИ И УСЛУГИ
        </h1>
        <table>
          <tr>
            <th>СТАТУС</th>
            <th>НАЗВАНИЕ</th>
            <th>СТОИМОСТЬ</th>
            <th>ДАТА СОЗДАНИЯ</th>
          </tr>
          <tr> 
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  )
}

