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
      {/* <h3>СОРТИРОВАТЬ ПО:</h3> */}
      <div className="find_header">
        <div>ДАТА СОЗДАНИЯ</div>
        <div>НАЗВАНИЕ</div>
        <div>ЦЕНА, p.</div>
        <div>ОПИСАНИЕ</div>
        <div>ВЫПОЛНЕНИЕ</div>
      </div>
      <div className="container_all">
        <div className="container_allServ">
          {/* {services.map((service)=>{
          return(
            <>
          <div>{service.createdAt}</div>
          <div>{service.title}</div>
          <div>{service.price}</div>
          <div>{service.description}</div>
          <div><button type="submit" class="btn btn-light" onClick={submitHandler}>Выполнить услугу</button></div>
            </>
          )})}</div> */}
          <div>{services.map((service)=>(<div>{service.createdAt}</div>))}</div>
           <div>{services.map((service)=>(<div>{service.title}</div>))}</div>
          <div>{services.map((service)=>(<div>{service.price}</div>))}</div>
          <div>{services.map((service)=>(<div>{service.description}</div>))}</div>
          <div>{services.map((service)=><button type="submit" class="btn btn-light" id={service.id} onClick={submitHandler}>Выполнить услугу</button>)}</div> 
        </div>
      </div>
    </div>
  );
}
