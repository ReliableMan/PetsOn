import React, { useEffect, useState } from "react";
import axios from "axios";
import "./findServ.css";

export default function FindServ() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3903/services")
    .then((response) => {
      console.log(response)
      const { data: services } = response;
      setServices(services);
      // setServices(response.data);
    });
  }, []);

  return (
    <>
      <div className="container_find">
        <h1>НАЙТИ УСЛУГУ:</h1>
        <h3>СОРТИРОВАТЬ ПО:</h3>
        <div className="find_header">
          <div>ДАТА СОЗДАНИЯ</div>
          <div>НАЗВАНИЕ</div>
          <div>ЦЕНА, p.</div>
          <div>ОПИСАНИЕ</div>
        </div>
        <div className="container_allServ">
          <div>{services.map((service)=>(<div>{service.createdAt}</div>))}</div>
          <div>{services.map((service)=>(<div>{service.title}</div>))}</div>
          <div>{services.map((service)=>(<div>{service.price}</div>))}</div>
          <div>{services.map((service)=>(<div>{service.description}</div>))}</div>
          <div><input type="checkbox"/></div>
        </div>
      </div>
    </>
  );
}
