import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./findServ.css";

export default function FindServ() {
  const [services, setServices] = useState([]);

  const navigate = useNavigate();
  const { id } = useParams();

  const submitHandler = async (e) => {
    e.preventDefault();
    navigate(`/`);
  };

  useEffect(() => {
    axios.get("http://localhost:3903/services").then((response) => {
      //console.log(response)
      const { data: services } = response;
      setServices(services);
    });
  }, []);

  return (
    <div className="container_find">
      <h1>НАЙТИ УСЛУГУ:</h1>
      <div className="find_header">
        <div>НАЗВАНИЕ</div>
        <div>ЦЕНА, p.</div>
        <div>ОПИСАНИЕ</div>
        <div>ВЫПОЛНЕНИЕ</div>
      </div>
      <div className="container_all">
        <div className="container_allServ">
          <div className="table-cell">{services.map((service) => (<div>{service.title}</div>))}</div>
          <div className="table-cell">{services.map((service) => (<div>{service.price}</div>))}</div>
          <div className="table-cell">{services.map((service) => (<div>{service.description}</div>))}</div>
          <div className="btn_find">{services.map((service) =>
            <button type="submit" class="btn btn-light" id={service.id} onClick={submitHandler}>
              Выполнить услугу
            </button>)}</div>
        </div>
      </div>

      {/* 
      <table className="service-table-container" >
        <thead className="find_header">
          <tr>
            <th><h1>НАЗВАНИЕ</h1></th>
            <th><h1>ЦЕНА, p</h1></th>
            <th><h1>ОПИСАНИЕ</h1></th>
            <th><h1>ВЫПОЛНЕНИЕ</h1></th>
          </tr>
        </thead>

        <tbody className="container_all">
          <tr className="container_allServ">
            <td>{services.map((service)=>(<div>{service.title}</div>))}</td>
            <td>{services.map((service)=>(<div>{service.price}</div>))}</td>
            <td>{services.map((service)=>(<div>{service.description}</div>))}</td>
            <td>{services.map((service)=>
            <button type="submit" class="btn btn-light" id={service.id} onClick={submitHandler}>
              Выполнить услугу
            </button>)}</td>
          </tr>
        </tbody>
        <tfoot>
        </tfoot>
      </table> */}
    </div>
  );
}
