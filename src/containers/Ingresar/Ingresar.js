import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import IngresarForm from '../../components/Ingresar/IngresarForm';

class Ingresar extends Component {
  render() {
    return (
      <div className="container my-5">
        <h1 className="text-center text-uppercase">Ingresar</h1>
        <hr />
        <IngresarForm />
        <div className="text-center">
          <NavLink to="/registro" className="text-success"><strong>Crear una cuenta</strong></NavLink>
        </div>
      </div>
    )
  }
}

export default Ingresar;