import React from 'react';

import styles from './Lupulo.module.css';

const Lupulo = (props) => {
  const precio = new Intl.NumberFormat('es-CL', {style: 'currency', currency: 'CLP'}).format(props.lupulo.price);
  
  return (
    <div className={styles.Lupulo}>
      <div className="card text-white bg-dark border-light p-0">
        {props.lupulo.stock <= 0 ? <span className="badge badge-danger position-absolute m-2">Sin stock</span> : null}
        <img src={"https://loscastanosapi.herokuapp.com" + props.lupulo.image} className="card-img-top" alt={props.lupulo.name} />
        <div className="card-body my-0 py-2">
          <h5 className="card-title font-weight-bold mb-0">{props.lupulo.name}</h5>
          <p className="card-text font-weight-light">Precio: <strong>{precio}</strong></p>
        </div>
      </div>
    </div>
  )
}

export default Lupulo;