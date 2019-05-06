import React from 'react';

import styles from './Lupulo.module.css';

const Lupulo = (props) => {
  const precio = new Intl.NumberFormat('es-CL', {style: 'currency', currency: 'CLP'}).format(props.precio);
  
  return (
    <div className={styles.Lupulo}>
      <div className="card text-dark p-0">
        {props.stock <= 0 ? <span className="badge badge-danger position-absolute m-2">Sin stock</span> : null}
        <img src="https://via.placeholder.com/500" className="card-img-top" alt={props.nombre} />
        <div className="card-body">
          <h5 className="card-title font-weight-bold">{props.nombre}</h5>
          <p className="card-text font-weight-light">Precio: <strong>{precio}</strong></p>
        </div>
      </div>
    </div>
  )
}

export default Lupulo;