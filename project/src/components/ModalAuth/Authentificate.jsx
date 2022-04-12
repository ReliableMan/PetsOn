import React from 'react';
import '../ModalReg/modal.css'

const Authentificate = ({ active, setActive }) => {
    return (
        <div className={active ? "modal active": "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modelContent active": "modelContent"} onClick={(e) => e.stopPropagation()}>
              <p> Авторизация</p>
               <br/>
               <div className="row g-3 align-items-center">
                   <div className="col-auto">
                    <label htmlFor="inputPassword6" className="col-form-label">Email</label>
                   </div>
                <div className="col-auto">
                  <input type="text" className="form-control" />
                </div>
               </div>
                    <br />
                    <div className="row g-3 align-items-center">
                   <div className="col-auto">
                    <label htmlFor="inputPassword6" className="col-form-label">Пароль</label>
                   </div>
                <div className="col-auto">
                  <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
                </div>
               </div>
               <br />
               <div className="container"> 
               <button type="button" className="btn btn-outline-primary">Primary</button>
               </div>
              </div>
        </div>
    );
};

export default Authentificate;
