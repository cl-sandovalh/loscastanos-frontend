import React from 'react';

import styles from './Logo.module.css';
import ImagenLogo from '../../../assets/logo.png';

const Logo = () => {
  return(
    <img className={styles.Logo} src={ImagenLogo} alt="Logo" />
  );
}

export default Logo;