import React from 'react';
import { Link } from 'react-router-dom'

import Lupulo from './Lupulo/Lupulo';

const ListaLupulos = (props) => {
  return (
    <div className="card-columns">
      {
        props.lupulos.map(lupulo =>
          <Link to={`/lupulos/${lupulo.id}`} key={lupulo.id}>
            <Lupulo 
              nombre={lupulo.name} 
              tipo={lupulo.lupulo_type} 
              descripcion={lupulo.description}
              precio={lupulo.amount}
              stock={lupulo.stock}
            />
          </Link>
        )
      }
    </div>
  )
}

export default ListaLupulos;