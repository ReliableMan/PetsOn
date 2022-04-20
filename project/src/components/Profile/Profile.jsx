import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./profile.css";

export default function Profile() {
  const [user, setUser] = useState([]);

  const [service, setService] = useState([]);
  const { id } = useParams();
  console.log("id", id);

  const [services, setServices] = useState([]);
  // const [currentPhoto, setCurrentPhoto] = useState(null);
  const { id } = useParams();
  console.log('id', id)

  // const onChange = e => {
  //   // console.log(e.target.photo);
  //   setPhoto(e.target.photo)
  // };

  // // console.log(photo);

  // const onSubmit = async e => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("uploadedPhoto", photo);
  // }


  useEffect(() => {
    axios.get(`http://localhost:3903/users/profile/${id}`).then((userData) => {
      const {
        username,
        email,
        first_name,
        last_name,
        date_birth,
        role,
        photo,
        description,
      } = userData.data;
      setUser({
        username,
        email,
        first_name,
        last_name,
        date_birth,
        role,
        photo,
        description,
      });
    });

    axios.get(`http://localhost:3903/services/${id}`).then((response) => {
      console.log(response);
      const { data: service } = response;
      setService(service);
      // setServices(response.data);
    });
  }, []);

    axios.get(`http://localhost:3903/services/${id}`)
      .then((response) => {
        console.log(response)
        const { data: services } = response;
        setServices(services);
        // setServices(response.data);
      });
  }, [id]);


  return (
    <>
      <div className="profile">
        <div className="user-info-container">
          <h1 className="heading">ЛИЧНЫЙ КАБИНЕТ</h1>
          <div className="user-info">
            <div className="user-info-container">
              <p className="user-info-label">Логин</p>
              <p className="user-info-data">{user.username}</p>
              <p className="user-info-label">Email</p>
              <p className="user-info-data">{user.email}</p>
              <p className="user-info-label">ФИО</p>
              <p className="user-info-data">
                {user.first_name} {user.last_name}
              </p>
              <p className="user-info-label">Дата рождения</p>
              <p className="user-info-data">{user.date_birth}</p>
              <p className="user-info-label">Роль</p>
              <p className="user-info-data">{user.role}</p>
              <p className="user-info-label">Обо мне</p>
              <p className="user-info-data">{user.description}</p>
            </div>
            <div className="photo-btn-container">

              <img
                className="photo"
                // src={user.photo}
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.stack.imgur.com%2FHQwHI.jpg&f=1&nofb=1"
                alt="user"
                width=""
                height=""
              />

              <input
                type="file"
                id="myPhoto"
                name="myPhoto"
                className="change-photo"
              />
              <button className="btn-change-data">
                <Link
                  className="btn-change-data-link"
                  to={`/users/profile/${id}/edit`}
                >
                  ИЗМЕНЕНИТЬ ДАННЫЕ
                </Link>

              <div className="photo-container">
                <img className="my-photo" id="photo" name="photo"
                  // src={user.photo}
                  // src="images/profileImage.jpeg"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvectorified.com%2Fimages%2Fno-profile-picture-icon-35.png&f=1&nofb=1"
                  alt="user"
                  width="300px" height="300px"
                />
                {/* <form onSubmit={onSubmit}>
                  <input type="file" id="photo" name="uploadedPhoto" className="change-photo"
                    onChange={onChange}
                  />
                  <button type='submit' className="btn-change-photo">ИЗМЕНИТЬ ФОТО</button>
                </form> */}
              </div>

              <button className="btn-change-data">
                <Link className="btn-change-data-link" to={`/users/profile/${id}/edit`}>ИЗМЕНИТЬ ДАННЫЕ</Link>

              </button>
            </div>
          </div>
        </div>

        <div className="user-services">
          <h1 className="heading">МОИ ЗАЯВКИ И УСЛУГИ</h1>
          <div className="myServices">
            <table className="container">
              <thead>
                <tr>
                  <th>СТАТУС</th>
                  <th>ID ПОЛЬЗОВАТЕЛЯ</th>
                  <th>НАЗВАНИЕ</th>
                  <th>СТОИМОСТЬ</th>
                  <th>ДАТА СОЗДАНИЯ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-row">
                  <td>в процессе</td>
                  <td>7</td>
                  <td>gfff</td> 
                  <td>100</td>
                  <td>Created at</td>
                </tr>
              </tbody>
              <tfoot>
              </tfoot>
            </table>
          </div>
        </div> 

        {/* <div className="container_profile">
          <div className="profile_header">
            <div>СТАТУС</div>
            <div>ID ПОЛЬЗОВАТЕЛЯ</div>
            <div>НАЗВАНИЕ</div>
            <div>СТОИМОСТЬ</div>
            <div>ДАТА СОЗДАНИЯ</div>
          </div>
          <div className="container_profile">
            <div>{services.map((i)=>(<div>{i.title}</div>))}</div>
         <div>{services.map((i)=>(<div>{i.createdAt}</div>))}</div>
          <div>{services.map((i)=>(<div>{i.price}</div>))}</div>
          <div>{services.map((i)=>(<div>{i.description}</div>))}</div>
          <div><input type="checkbox"/></div> 
          </div>
        </div> */}
      </div>
    </>
  );
}
