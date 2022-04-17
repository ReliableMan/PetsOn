import React from "react";
import "./findServ.css";

export default function FindServ() {
  return (
    <>
      <div className="container_find">
        <h1>НАЙТИ УСЛУГУ:</h1>
        <p>СОРТИРОВАТЬ ПО:</p>
        <div className="find_header">
          <p>ДАТА СОЗДАНИЯ</p>
          <p>НАЗВАНИЕ</p>
          <p>ЦЕНА</p>
          <p>ОПИСАНИЕ</p>
        </div>
        <div className="container_allServ">
          <p>17.04.2022</p>
          <p>Выгулять Бобика</p>
          <p>300 р</p>
          <p>Очень срочно</p>
        </div>
      </div>
    </>
  );
}
