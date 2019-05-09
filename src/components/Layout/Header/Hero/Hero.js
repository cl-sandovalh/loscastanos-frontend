import React from 'react';

import LupulosHeader from '../../../../assets/lupulos-header.jpg';
import styles from './Hero.module.css';

const Hero = () => (
  <>
  <div className="jumbotron w-100 text-dark position-absolute">
    <h1 className="display-4">Lupulos "Los Castaños"</h1>
    <p className="lead">Aquí debería ir algo gay</p>
  </div>
  <img className={styles.Imagen} src={LupulosHeader} alt="Imagen header" />
  </>
);

export default Hero;