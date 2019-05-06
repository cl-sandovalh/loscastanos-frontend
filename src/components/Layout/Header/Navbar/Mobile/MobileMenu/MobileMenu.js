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
      <button className="btn" onClick={props.close}><i className="fas fa-times h2 text-light"></i></button>
      </div>
      <ul className="navbar-nav text-center" onClick={props.close}>
        <li className="nav-item">
          <NavLink to="/" exact className="nav-link text-light h3" activeClassName="font-weight-bold">Inicio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/lupulos" className="nav-link text-light h3" activeClassName="font-weight-bold">Lupulos</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contacto" className="nav-link text-light h3" activeClassName="font-weight-bold">Contacto</NavLink>
        </li>
      </ul>
      <form className="mt-5 w-75 mx-auto" onSubmit={props.loginSubmit}>
        <div className="form-group">
          <input type="email" value={props.email} onChange={props.emailChange} className="form-control" aria-describedby="email" placeholder="Email" required/>
        </div>
        <div className="form-group">
          <input type="password" value={props.password} onChange={props.passwordChange} className="form-control" placeholder="Contraseña" required/>
        </div>
        <div className="form-group text-center">
          <button type="submit" className="btn btn-success">Ingresar</button>
        </div>
      </form>
      <div className="text-center">
        <NavLink to="/registro" className="text-success" onClick={props.close}>Crear una cuenta</NavLink>
      </div>
    </div>
  )
}

export default MobileMenu;