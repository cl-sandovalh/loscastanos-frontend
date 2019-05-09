import React from 'react';

import styles from './Mobile.module.css';

import Logo from '../../Logo/Logo';

const Mobile = (props) => {
  return (
    <nav className={styles.MobileOnly + " navbar fixed-top navbar-light color-3"}>
      <Logo />
      <div className="form-inline my-2 my-lg-0">
        <button className="btn" onClick={props.open}><i className="fas fa-bars h3"></i></button>
      </div>
    </nav>
  )
}

export default Mobile;