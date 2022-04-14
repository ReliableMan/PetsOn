import React from 'react'
import { Link } from 'react-router-dom';
import "./services.css";

export default function Services() {
  return (
    <div className='service'>
      <div>ВЫБЕРИ УСЛУГУ</div>
      <div>
        <Link to="walking">ВЫГУЛ</Link>
      </div>
      <div>
        <Link to="grooming">ГРУМИНГ</Link>
      </div>
      <div>
       <Link className="vetLink" aria-current="page" to="vet">ВЕТЕРИНАРИЯ</Link>
      </div>
      <div>
       <Link to="other">ДРУГОЕ</Link>
      </div>
    </div>
  )
}
