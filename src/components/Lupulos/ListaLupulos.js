import React from 'react';
import { Link } from 'react-router-dom'

import Lupulo from './Lupulo';

const ListaLupulos = (props) => {
  return (
    <div className="card-columns">
      {
        props.lupulos.map(lupulo =>
          <Link to={`/lupulos/${lupulo.id}`} key={lupulo.id}>
            <Lupulo 
              imagen={lupulo.image}
              nombre={lupulo.name} 
              tipo={lupulo.lupulo_type} 
              descripcion={lupulo.description}
              uses={lupulo.uses}
              beer_type={lupulo.beer_type}
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