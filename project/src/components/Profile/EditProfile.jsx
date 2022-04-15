import React from 'react'
import "./profile.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userUpdatingData, clearInputs, updateUser } from '../../redux/actions/userActions';

export default function EditProfile() {

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
        <h2 className="heading">ИЗМЕНЕНИЕ ДАННЫХ</h2>
        <div>
          <label htmlFor="myPhoto" className="form-label">Загрузить фото профиля</label>
          <input type="file" id="myPhoto" name="myPhoto" className="change-photo" />
        </div>
        <div className="name-birth-role-container">
          <div className="name-container">
            <div>
              <label htmlFor="firstName" className="form-label">Имя</label>
              <input
                type="text" id="firstName" name="firstName" className="form-input"
                value={inputs.first_name} onChange={(e) => dispatch(userUpdatingData(e))}
              />
            </div>
            <div>
              <label htmlFor="surname" className="form-label">Фамилия</label>
              <input
                type="text" id="surname" name="surname" className="form-input"
                value={inputs.last_name} onChange={(e) => (e) => dispatch(userUpdatingData(e))}
              />
            </div>
          </div>
          <div className="birth-role-container">
            <div>
              <label htmlFor="birthday" className="form-label">Дата рождения</label>
              <input
                type="date" min="1960-01-01" max="2020-12-31"
                id="birthday" name="birthday" className="form-input"
                value={inputs.date_birth} onChange={(e) => (e) => dispatch(userUpdatingData(e))}
              />
            </div>
            <div>
              <label htmlFor="role" className="form-label">Роль</label>
              <select className="select-role" name="role" id="role">
                <option value="user">Пользователь</option>
                <option value="specialist">Специалист</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="aboutMe" className="form-label">Обо мне</label>
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
