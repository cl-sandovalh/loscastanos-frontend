import React from 'react';
import { NavLink } from 'react-router-dom'

import styles from './MobileMenu.module.css';

const MobileMenu = (props) => {
  let attachedStyles = [styles.MobileMenu, styles.Close];
  if (props.toggle) {
    attachedStyles = [styles.MobileMenu, styles.Open];
  }

  return (
    <div className={attachedStyles.join(' ') + " p-3"}>
      <div className="text-right">
      <button className="btn" onClick={props.close}><i class="fas fa-times h2 text-light"></i></button>
      </div>
      <ul className="navbar-nav text-center" onClick={props.close}>
        <li className="nav-item">
          <NavLink to="/" exact className="nav-link text-light lead">Inicio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/lupulos" className="nav-link text-light lead">Lupulos</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contacto" className="nav-link text-light lead">Contacto</NavLink>
        </li>
      </ul>
      <form className="mt-5">
        <div className="form-group">
          <input type="email" className="form-control" aria-describedby="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <input type="password" className="form-control" placeholder="Contraseña" />
        </div>
        <div className="form-group text-center">
          <button type="submit" className="btn btn-success" onClick={props.close}>Ingresar</button>
        </div>
      </form>
      <div className="text-center">
        <NavLink to="/registro" className="text-success" onClick={props.close}>Crear una cuenta</NavLink>
      </div>
    </div>
  )
}

export default MobileMenu;