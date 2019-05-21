import React from 'react';
import { Link } from 'react-router-dom'

import Lupulo from './Lupulo';

const ListaLupulos = (props) => {
  return (
    <div className="card-columns">
      {
        props.lupulos.map(lupulo =>
          <Link to={`/lupulos/${lupulo.id}`} key={lupulo.id}>
            <Lupulo lupulo={lupulo} />
          </Link>
        )
      }
    </div>
  )
}

export default ListaLupulos;