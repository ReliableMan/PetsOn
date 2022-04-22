import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./findServ.css";
import Modal from './ModalNodeMailer'

export default function FindServ() {
  const [services, setServices] = useState([]);
  const [modal, setModal] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  const submitHandler = () => {
    // e.preventDefault();
    // navigate(`/`);
    // console.log('yrrrrrrrr');
    setModal(true)
  };

  useEffect(() => {
    axios.get("http://localhost:3903/services").then((response) => {
      //console.log(response)
      const { data: services } = response;
      setServices(services);
    });
  }, []);

  return (
    <>
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
          <div>{services.map((service) => (<div className="services-table-cell">{service.title}</div>))}</div>
          <div>{services.map((service) => (<div className="services-table-cell">{service.price}</div>))}</div>
          <div>{services.map((service) => (<div className="services-table-cell">{service.description}</div>))}</div>
          <div className="btn_find">{services.map((service) =>
            <button type="submit" class="btn btn-light butn1" id={service.id} onClick={submitHandler}>
              Выполнить услугу
            </button>)}</div>
        </div>
      </div>
    <Modal active={modal} setActive={setModal}>
    </Modal>
    </div>
    </>
  );
}
