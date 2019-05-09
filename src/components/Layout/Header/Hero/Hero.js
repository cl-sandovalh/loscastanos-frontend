import React from 'react';

import Image from '../../../../assets/lupulos-header.jpg';
import styles from './Hero.module.css';

const Hero = () => (
  <>
  <div className={styles.Hero}>
    <img src={Image} className={styles.Image} alt="Imagen header" />
  </div>
  </>
);

export default Hero;