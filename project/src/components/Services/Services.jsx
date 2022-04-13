import React from 'react'
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <>
      <div>ВЫБЕРИ УСЛУГУ</div>
      <div>
        <Link to="walking">ВЫГУЛ</Link>
      </div>
      <div>
        <Link to="grooming">ГРУМИНГ</Link>
      </div>
      <div>
       <Link to="other">ДРУГОЕ</Link>
      </div>
    </>
  )
}
