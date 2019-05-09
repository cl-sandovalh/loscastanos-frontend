import React from 'react';
import { NavLink } from 'react-router-dom'

import styles from './MobileMenu.module.css';

import IngresarForm from '../../../../../Ingresar/IngresarForm/IngresarForm';

const MobileMenu = (props) => {
  let attachedStyles = [styles.MobileMenu, styles.Close];
  if (props.toggle) {
    attachedStyles = [styles.MobileMenu, styles.Open];
  }

  return (
    <div className={attachedStyles.join(' ') + " p-3"}>
      <div className="text-right">
      <button className="btn" onClick={props.close}><i className="fas fa-times h2 text-dark"></i></button>
      </div>
      <ul className="navbar-nav text-center" onClick={props.close}>
        <li className="nav-item">
          <NavLink to="/" exact className="nav-link text-dark h3" activeClassName="font-weight-bold">Inicio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/lupulos" className="nav-link text-dark h3" activeClassName="font-weight-bold">Lupulos</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contacto" className="nav-link text-dark h3" activeClassName="font-weight-bold">Contacto</NavLink>
        </li>
      </ul>
      <IngresarForm emailChange={props.emailChange} passwordChange={props.passwordChange} loginSubmit={props.loginSubmit}/>
      <div className="text-center">
        <NavLink to="/registro" className="text-dark" onClick={props.close}>Crear una cuenta</NavLink>
      </div>
    </div>
  )
}

export default MobileMenu;