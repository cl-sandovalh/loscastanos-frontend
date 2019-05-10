import React from 'react';

import styles from './Mobile.module.css';

import Logo from './Logo';

const Mobile = (props) => {
  return (
    <nav className={styles.MobileOnly + " navbar fixed-top bg-dark"}>
      <Logo />
      <div className="w-100 mr-0">
        <button className={styles.Button + " btn texto-4"} onClick={props.open}><i className="fas fa-bars h3"></i></button>
      </div>
    </nav>
  )
}

export default Mobile;