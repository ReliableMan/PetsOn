import React from 'react'
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
    <>
      <form onSubmit={submitHandler}>
        <h2>ЛИЧНЫЙ КАБИНЕТ</h2>
        <div>
          <label for="myPhoto" className="form-label">Поменяй фото</label>
          <input type="file" id="myPhoto" name="myPhoto" className="form-control" />
        </div>
        <div>
          <label for="firstName" className="form-label">Имя</label>
          <input
            type="text" id="firstName" name="firstName" className="form-control"
            value={inputs.first_name} onChange={(e) => dispatch(userUpdatingData(e))}
          />
        </div>
        <div>
          <label for="surname" className="form-label">Фамилия</label>
          <input
            type="text" id="surname" name="surname" className="form-control"
            value={inputs.last_name} onChange={(e) => (e) => dispatch(userUpdatingData(e))}
          />
        </div>
        <div>
          <label for="aboutMe" className="form-label">Обо мне</label>
          <textarea
            type="text" id="aboutMe" name="aboutMe" className="form-control"
            value={inputs.description} onChange={(e) => dispatch(userUpdatingData(e))}>
          </textarea>
        </div>
        <button type="button" className="btn btn-primary">Изменить данные</button>
      </form>
    </>
  )
}
