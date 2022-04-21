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
      <div className="myServices">
        <table className="container services-container">
          <thead>
            <tr>
              <th className="table-head">НАЗВАНИЕ</th>
              <th className="table-head">ЦЕНА, p.</th>
              <th className="table-head">ОПИСАНИЕ</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{services.map((service) => (<div className="services-table-cell">{service.title}</div>))}</td>
              <td>{services.map((service) => (<div className="services-table-cell">{service.price}</div>))}</td>
              <td>{services.map((service) => (<div className="services-table-cell">{service.description}</div>))}</td>
              <td>{services.map((service) =>
                <button type="submit" className="btn btn-light" id={service.id} onClick={submitHandler}>
                  Выполнить услугу
                </button>)}</td>
            </tr>
          </tbody>
          <tfoot>
          </tfoot>
        </table>
      </div>
    </div>
    </>
  );
}
