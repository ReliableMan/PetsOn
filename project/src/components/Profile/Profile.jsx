import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom'
import axios from "axios";
import "./profile.css";
export default function Profile(item) {
  const [user, setUser] = useState([]);
  const [servicesState, setServices] = useState([]);
  
  // const [currentPhoto, setCurrentPhoto] = useState(null);
  const { id } = useParams();
  //console.log('id', id)

const delHandler =(e)=>{
// console.log(e.target.id, 'e.target.id');
axios.post ('http://localhost:3903/services/delete', {id}).then((data )=>{
  console.log('daaata==>', data)
})
// console.log(servicesState, 'servicesState');
setServices(servicesState.filter(item=> item.id != e.target.id))
// const fuck = [...servicesState].filter((fu )=> fu.id !== id)
// setServices(fuck)
}

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
      const { username, email, first_name, last_name, date_birth, role, photo, description } = userData.data;
      setUser({ username, email, first_name, last_name, date_birth, role, photo, description })
    });
    axios.get(`http://localhost:3903/services/${id}`)
      .then((response) => {
       // console.log(response.data, '22222222222222222')
        // const { services } = response.data;
        setServices(response.data);
        // setServices(response.data);
      });
  }, []);
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
              <p className="user-info-data">{user.first_name} {user.last_name}</p>
              <p className="user-info-label">Дата рождения</p>
              <p className="user-info-data">{user.date_birth}</p>
              <p className="user-info-label">Роль</p>
              <p className="user-info-data">{user.role}</p>
              <p className="user-info-label">Обо мне</p>
              <p className="user-info-data">{user.description}</p>
            </div>
            <div className="photo-btn-container">
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

              <Link className="btn-change-data-link" to={`/users/profile/${id}/edit`}>
                <button className="btn-change-data">
                  ИЗМЕНИТЬ ДАННЫЕ
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="user-services">
          <h1 className="heading">МОИ ЗАЯВКИ</h1>
          <div className="myServices">
            <table className="container">
              <thead>
                <tr>
                  <th>НАЗВАНИЕ</th>
                  <th>СТОИМОСТЬ</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                <tr className="table-row">
                  <td>{servicesState.length ? servicesState.map((service)=>(<div className="profile-table-cell">{service.title}</div>)) : ''}</td>
                  <td>{servicesState.length ? servicesState.map((service)=>(<div className="profile-table-cell">{service.price}</div>)) : ''}</td>
                  <td>{servicesState.length ? servicesState.map((service)=>(<div className="profile-table-cell"><button type="onSubmit" className="btn-delete" id={service.id} onClick={delHandler}>Удалить</button></div>)) : ''}</td>
                </tr>
              </tbody>
              <tfoot>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

