import React from 'react';

import Image from '../../../assets/lupulos-header.jpg';
import styles from './Hero.module.css';

const Hero = () => (
  <>
  <div className={styles.Hero}>
    <img src={Image} className={styles.Image + " position-absolute"} alt="Imagen header" />
    <p className={styles.Texto}>  
      Un sueño y pasión transformado en emprendimiento.<br />
      Todo comienza con un rizoma hasta llegar a una rica cerveza.
    </p>
  </div>
  </>
);

export default Hero;