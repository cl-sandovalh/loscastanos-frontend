import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import IngresarForm from '../../components/Ingresar/IngresarForm/IngresarForm';

class Ingresar extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h4 className="display-4 text-center">Ingresar</h4>
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