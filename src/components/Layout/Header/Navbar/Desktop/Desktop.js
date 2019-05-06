import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Desktop.module.css';

const Desktop = () => {
  return (
    <nav className={styles.DesktopOnly + " navbar navbar-expand navbar-light bg-light"}>
      <NavLink to="/" exact className="navbar-brand">Los Castaños</NavLink>
      <div className="collapse navbar-collapse">
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
        <form className="form-inline my-2 my-lg-0">
          <NavLink to="/carro" className="btn btn-outline-info text-info my-2 my-sm-0 mx-1" activeClassName="btn-info text-light rounded"><i className="fas fa-shopping-cart mr-2"></i>Ver carro</NavLink>
          <NavLink to="/ingresar" className="btn btn-outline-info text-info my-2 my-sm-0 mx-1" activeClassName="btn-info text-light rounded"><i className="fas fa-shopping-cart mr-2"></i>Ingresar</NavLink>
        </form>
      </div>
    </nav>
  )
}

export default Desktop;