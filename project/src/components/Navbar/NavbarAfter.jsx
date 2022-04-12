import React from 'react'
import { useState } from 'react';
import Registration from '../ModalReg/Registration';
import Authentificate from '../ModalAuth/Authentificate';


export default function Navbar() {
   // сделали состояние модального окна
   const [modalActive, setModalActive] = useState(false)
   const [modalActiveLogin, setModalActiveLogin] = useState(false)
 
 
   return (
     <div className='container'>
       <nav className="navbar navbar-light d-flex justify-content-evenly">
                 <div className="nav-item">
                 <button type="button" className="btn btn-outline-primary" onClick={() => setModalActiveLogin(true)}>Login</button>
                 </div>
                 <div className="nav-item">
                 <button type="button" className="btn btn-outline-primary" onClick={() => setModalActive(true)}>Registration</button>
                 </div>
      </nav>   
 
       <Registration active={modalActive} setActive={setModalActive}>
       </Registration>
 
       <Authentificate active={modalActiveLogin} setActive={setModalActiveLogin}>
       </Authentificate>
     </div>
   )
   }
