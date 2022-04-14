import React from 'react'
import "./services.css";

export default function Services() {
  return (
    <div className="services">
      <div className="heading">ОСТАВЬТЕ ЗАЯВКУ НА УСЛУГУ</div>
      <form>
        <div className="">
          <label htmlFor="serviceTitle" className="form-label">Название услуги</label>
          <input type="text" name="serviceTitle" id="serviceTitle"
            className="form-input" required="required" />
        </div>
        <div className="">
          <label htmlFor="serviceCategory" className="form-label">Категория</label>
          <select className="select" name="serviceCategory" id="serviceCategory">
            <option value="walk">ВЫГУЛ</option>
            <option value="grooming">ГРУМИНГ</option>
            <option value="veterinary">ВЕТЕРИНАРИЯ</option>
            <option value="other">ДРУГОЕ</option>
          </select>
        </div>
        <div className="">
          <label htmlFor="servicePrice" className="form-label">Стоимость</label>
          <input type="number" min="0" max="10000" step="1"
            name="servicePrice" id="servicePrice"
            className="form-input" required="required" />
          <label htmlFor="currency" className="form-label">Валюта</label>
          <select className="select" name="select-currency" id="currency">
            <option value="ruble">&#8381;</option>
            <option value="dollar">&#36;</option>
            <option value="euro">&euro;</option>
          </select>
        </div>
        <div className="">
          <label htmlFor="serviceTitle" className="form-label">Подробное описание</label>
          <textarea id="serviceDescription" name="serviceDescription" className="form-textarea"
            rows="4" cols="50"> 
          </textarea>
        </div>
        <button type="submit" className="btn-submit">Отправить</button>
      </form>
    </div>
  )
}

