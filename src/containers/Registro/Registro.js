import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import RegistroForm from '../../components/Registro/RegistroForm/RegistroForm';

class Registro extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h4 className="display-4 text-center">Registro</h4>
        <hr />
        <RegistroForm />
        <div className="text-center">
          <NavLink to="/ingresar" className="text-success"><strong>¿Ya tienes una cuenta? Ingresa aquí</strong></NavLink>
        </div>
      </div>
    )
  }
}

export default Registro;