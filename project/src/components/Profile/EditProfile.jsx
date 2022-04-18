import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import axios from "axios";
import "./profile.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userUpdatingData, clearInputs, updateUser } from '../../redux/actions/userActions';

export default function EditProfile() {
  const [user, setUser] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3903/users/profile/${id}`).then((userData) => {
      const { username, email, first_name, last_name, date_birth, role, photo, description } = userData.data;
      // console.log(email, "emaaaaaaaaaaaail");
      setUser({ username, email, first_name, last_name, date_birth, role, photo, description })
    });
  }, [id]);

  const inputs = useSelector(store => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const submitHandler = async (e) => {
    e.preventDefault();
    console.log('inputs', inputs)
    // dispatch(updateUser(inputs));
    dispatch(clearInputs());
    navigate('/profile')
  }

  return (
    <div className="edit-profile">
      <form onSubmit={submitHandler}>
        <h1 className="heading">ИЗМЕНЕНИЕ ДАННЫХ</h1>
        <div>
          <label htmlFor="myPhoto" className="form-label">ЗАГРУЗИТЬ ФОТО ПРОФИЛЯ</label>
          <input type="file" id="myPhoto" name="myPhoto" className="change-photo" />
        </div>
        <div className="name-birth-role-container">
          <div className="name-container">
            <div>
              <label htmlFor="firstName" className="form-label">ИМЯ</label>
              <input
                type="text" id="firstName" name="firstName" className="form-input"
                placeholder={user.last_name}
                value={inputs.first_name} onChange={(e) => dispatch(userUpdatingData(e))}
              />
            </div>
            <div>
              <label htmlFor="surname" className="form-label">ФАМИЛИЯ</label>
              <input
                type="text" id="surname" name="surname" className="form-input"
                placeholder={user.first_name}
                value={inputs.last_name} onChange={(e) => (e) => dispatch(userUpdatingData(e))}
              />
            </div>
          </div>
          <div className="birth-role-container">
            <div>
              <label htmlFor="birthday" className="form-label">ДАТА РОЖДЕНИЯ</label>
              <input
                type="date" min="1960-01-01" max="2020-12-31"
                id="birthday" name="birthday" className="form-input"
                value={user.date_birth} onChange={(e) => (e) => dispatch(userUpdatingData(e))}
              />
            </div>
            <div>
              <label htmlFor="role" className="form-label">РОЛЬ</label>
              <select className="select-role" name="role" id="role" 
              value={user.role}>
                <option value="user">Пользователь</option>
                <option value="specialist">Специалист</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="aboutMe" className="form-label">РЕДАКТИРОВАТЬ ОПИСАНИЕ</label>
          <textarea
            type="text" id="aboutMe" name="aboutMe" className="form-textarea"
            value={inputs.description} onChange={(e) => dispatch(userUpdatingData(e))}>
          </textarea>
        </div>
        <div className="btn-save-changes-container">
          <button type="button" className="btn-save-changes">СОХРАНИТЬ ИЗМЕНЕНИЯ</button>
        </div>
      </form>
    </div>
  )
}
