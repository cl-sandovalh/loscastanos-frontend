import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Mobile.module.css';

const Mobile = (props) => {
  return (
    <nav className={styles.MobileOnly + " navbar fixed-top navbar-light bg-light"}>
      <NavLink to="/" exact className="navbar-brand">Los Castaños</NavLink>
      <div className="form-inline my-2 my-lg-0">
        <button className="btn" onClick={props.open}><i className="fas fa-bars h3"></i></button>
      </div>
    </nav>
  )
}

export default Mobile;