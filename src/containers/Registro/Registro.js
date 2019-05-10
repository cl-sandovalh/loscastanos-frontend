import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import RegistroForm from '../../components/Registro/RegistroForm';

class Registro extends Component {
  state = {
    name: null,
    last_name: null,
    email: null,
    password: null,
    password_confirmation: null,
    phone_number: null,
    address: null
  };

  inputChangeHandler = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  formSubmitHandler = () => {
    console.log("enviar");
  }

  render() {
    return (
      <div className="container my-5">
        <h4 className="display-4 text-center">Registro</h4>
        <hr />
        <RegistroForm change={this.inputChangeHandler} submit={this.formSubmitHandler} />
        <div className="text-center">
          <NavLink to="/ingresar" className="text-success"><strong>¿Ya tienes una cuenta? Ingresa aquí</strong></NavLink>
        </div>
      </div>
    )
  }
}

export default Registro;