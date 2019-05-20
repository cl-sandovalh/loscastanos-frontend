import React from 'react';

import styles from './Nosotros.module.css';

const Nosotros = () => {
  return (
    <section className={styles.nosotros}>
      <div className={styles.fondo}>
        <div class="container">
          <h1 className={styles.Titulo}>Nosotros</h1>
          <p className={styles.Texto}>Somos una pequeña empresa agrícola  dedicada al cultivo, producción y comercialización de Lúpulo de la comuna de Quilaco VIII Región, nos mueve la pasión por cultivar los mejores lúpulos nacionales para el exigente mercado de la cerveza artesanal en Chile y el Mundo.</p>
        </div>
      </div>
    </section>
  )
}

export default Nosotros;