import React from 'react';

const LupuloInformacion = (props) => {
  return (
    <>
      <div className="col-lg-4 mb-5">
        <div className="text-center"><img className="mw-100 rounded" src={"https://loscastanosapi.herokuapp.com/" + props.lupulo.image} alt={props.lupulo.name} /></div><br />
        <p><strong>Tipo: </strong><br />{props.lupulo.lupulo_type}</p>
        <p><strong>Descripcion: </strong><br />{props.lupulo.description}</p>
      </div>
      <div className="col-lg-4 mb-5">
        <h4 className="text-success h3">Características físicas</h4>
        <strong>Tamaño cono: </strong>{props.lupulo.cone_size}<br />
        <strong>Forma cono: </strong>{props.lupulo.cone_shape}<br />
        <strong>Lupulina: </strong>{props.lupulo.lupulin}<br />
        <strong>Densidad cono: </strong>{props.lupulo.cone_density}<br />
        <strong>Capacidad cono: </strong>{props.lupulo.cone_capacity}<br />
        <strong>Facilidad cosecha: </strong>{props.lupulo.ease_harvest}<br />
        <hr />
        <h4 className="text-success h3">Características químicas</h4>
        <strong>Alfa acidos: </strong>{props.lupulo.alpha_acids} %<br />
        <strong>Beta acidos: </strong>{props.lupulo.beta_acids} %<br />
        <strong>Cohumulonas: </strong>{props.lupulo.cohumulones} %<br />
        <strong>Colupulonas: </strong>{props.lupulo.columbus} %<br />
        <strong>Indice almacenamiento: </strong>{props.lupulo.storage_index}<br />
        <strong>Humedad: </strong>{props.lupulo.humidity} %
      </div>
    </>
  )
}

export default LupuloInformacion;