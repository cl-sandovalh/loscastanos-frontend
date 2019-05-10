import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './DesktopMenuItems.module.css';

const Desktop = () => {
  return (
    <div className={styles.Desktop}>
      <div className="collapse navbar-collapse ml-3">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/" exact className="nav-link">Inicio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/lupulos" className="nav-link">Lupulos</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contacto" className="nav-link">Contacto</NavLink>
          </li>
        </ul>
        <ul className="navbar-nav my-2 my-lg-0">
          <li className="nav-item">
            <NavLink to="/carro" className="nav-link"><i className="fas fa-shopping-cart mr-2"></i>Ver carro</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/ingresar" className="btn color-4" activeClassName="color-4"><i className="fas fa-sign-in-alt mr-2"></i>Ingresar</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Desktop;