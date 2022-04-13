import React from 'react'
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <>
      <div className="">
        <div>ВЫБЕРИ УСЛУГУ</div>
        <div>
          <Link to="/services/walking">ВЫГУЛ</Link>
        </div>
        <div>
          <Link to="/services/grooming">ГРУМИНГ</Link>
        </div>
        <div>
          <Link to="/services/other">ДРУГОЕ</Link>
        </div>
      </div>
    </>
  )
}
