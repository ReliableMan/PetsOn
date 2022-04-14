import React from 'react'
import "./editProfile.css";
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
    <div className="profile">
      <form onSubmit={submitHandler}>
        <h2 className="heading">ИЗМЕНЕНИЕ ДАННЫХ</h2>
        <div>
          <label for="myPhoto" className="form-label">Загрузить фото профиля</label>
          <input type="file" id="myPhoto" name="myPhoto" className="change-photo" />
        </div>
        <div>
          <label for="firstName" className="form-label">Имя</label>
          <input
            type="text" id="firstName" name="firstName" className="form-input"
            value={inputs.first_name} onChange={(e) => dispatch(userUpdatingData(e))}
          />
        </div>
        <div>
          <label for="surname" className="form-label">Фамилия</label>
          <input
            type="text" id="surname" name="surname" className="form-input"
            value={inputs.last_name} onChange={(e) => (e) => dispatch(userUpdatingData(e))}
          />
        </div>
        <div>
          <label for="birthday" className="form-label">Дата рождения</label>
          <input
            type="text" id="birthday" name="birthday" className="form-input"
            value={inputs.date_birth} onChange={(e) => (e) => dispatch(userUpdatingData(e))}
          />
        </div>
        <div>
          <label for="role" className="form-label">Роль</label>
          <select className="select-role" name="role" id="role">
            <option value="walker">выгульщик</option>
            <option value="groomer">грумер</option>
            <option value="user">пользователь</option>
          </select>
        </div>
        <div>
          <label for="aboutMe" className="form-label">Обо мне</label>
          <textarea
            type="text" id="aboutMe" name="aboutMe" className="form-textarea"
            value={inputs.description} onChange={(e) => dispatch(userUpdatingData(e))}>
          </textarea>
        </div>
        <button type="button" className="btn-save-changes">СОХРАНИТЬ ИЗМЕНЕНИЯ</button>
      </form>
    </div>
  )
}
