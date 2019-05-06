import React from 'react';

import styles from './Lupulo.module.css';

const Lupulo = (props) => {
  return (
    <div className={styles.Lupulo}>
      <div className="card">
        <img src="https://via.placeholder.com/500" className="card-img-top" alt={props.nombre} />
        <div className="card-body text-dark">
          <h5 className="card-title">{props.nombre}</h5>
          <p className="card-text">Precio ${props.precio}</p>
        </div>
      </div>
    </div>
  )
}

export default Lupulo;