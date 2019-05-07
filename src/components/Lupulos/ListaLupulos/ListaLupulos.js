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
              nombre={lupulo.nombre} 
              tipo={lupulo.tipo} 
              descripcion={lupulo.descripcion}
              precio={lupulo.precio}
              stock={lupulo.stock}
            />
          </Link>
        )
      }
    </div>
  )
}

export default ListaLupulos;