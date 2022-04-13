import React from 'react'
import "./other.css";

export default function Services() {
  return (
    <div className='other'>
      <div>ОСТАВЬТЕ ЗАЯВКУ НА УСЛУГУ</div>
      <form>
        <div className="">
          <label htmlFor="serviceTitle" className="">Название услуги</label>
          <input type="text" className="" name="serviceTitle" id="serviceTitle" required="required"/>
        </div>
        <div className="">
          <label htmlFor="servicePrice" className="">Стоимость</label>
          <input type="number" min="0" max="10000" step="1" name="servicePrice" id="servicePrice" required="required" />
          <i>&#8381;</i>
        </div>
        <div className="">
          <label htmlFor="serviceTitle" className="">Подробное описание</label>
          <textarea id="serviceDescription" name="serviceDescription" rows="4" cols="50">
          </textarea>
        </div>
        <button type="submit" className="">Отправить</button>
      </form>
    </div>
  )
}

