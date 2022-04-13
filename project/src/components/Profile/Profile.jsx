import React, { useState } from 'react'

export default function Profile(props) {
  const [data, setData] = useState(props.edit ? props.edit.value : '');
  
  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: data
    });
    setData('');
  };

  const handleChange = e => {
    setData(e.target.value);
  };

  return (
      <div>
        {props.edit ? (
          <>
            <h1>ЛИЧНЫЙ КАБИНЕТ</h1>
            <label for="myPhoto">Поменяй фото</label>
            <input type="file" id="myPhoto" name="myPhoto"/>
            <div>
              <label for="fullName">ФИО</label>
              <input 
              type="text" id="fullName" name="fullName"
              placeholder="Поменяй ФИО" value={data}
              onChange={handleChange} className=""
              />
              <label for="aboutMe">Обо мне</label>
              <input 
              type="text" id="aboutMe" name="aboutMe"
              placeholder="Поменяй Обо мне" value={data}
              onChange={handleChange} className=""
              />
              <button type="button" onClick={handleSubmit} className="">Изменить данные</button>
            </div>
          </>
        ) : (
          <>
            <h2>ЛИЧНЫЙ КАБИНЕТ</h2>
            <div className="container d-flex my-3">
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.hFpyV8YrShUEkGGrBcEEtQAAAA%26pid%3DApi&f=1" alt="" width="" height="" />
              <div className="container">
                <p>ФИО</p>
                <p>Обо мне</p>
                <button>Изменить данные</button>
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
        )}
      </div>
  )
}

