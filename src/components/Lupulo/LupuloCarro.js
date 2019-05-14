import React from 'react';

import styles from './LupuloCarro.module.css';

const LupuloCarro = (props) => {
  const precio = new Intl.NumberFormat('es-CL', {style: 'currency', currency: 'CLP'}).format(props.lupulo.amount);
  return (
    <div className="col-lg-4 w-75 mx-auto">
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">Precio: <span className="h2">{precio}</span></h5>
          <hr />
          <div className="form-check form-check-inline">
            <input 
              className={styles.Radio}
              type="radio" name="type" value="flor" 
              onChange={props.handleLupuloType} checked={props.selectedType === 'flor'} 
            />
            <label className="form-check-label">Flor</label>
          </div>
          <div className="form-check form-check-inline">
            <input 
              className={styles.Radio} 
              type="radio" name="type" value="pellet" 
              onChange={props.handleLupuloType} checked={props.selectedType === 'pellet'} 
            />
            <label className="form-check-label">Pellet</label>
          </div>
          <p className="card-text mt-2">Cantidad disponible: {props.lupulo.stock}</p>
          <button to="/carro" className="btn color-1" disabled={props.lupulo.stock <= 0 ? true : false}>
            <i className="fas fa-cart-plus mr-2"></i>Agregar al carro
          </button>
        </div>
      </div>
    </div>
  )
}

export default LupuloCarro;