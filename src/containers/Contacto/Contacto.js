import React, { Component } from 'react';

import ContactoForm from '../../components/Contacto/ContactoForm';

class Contacto extends Component {
  render() {
    return (
      <section class="container mt-4">
        <h1 class="text-center text-uppercase">Contactanos</h1>
        <p class="lead text-center mt-3 ">Si tienes alguna pregunta puedes escribirnos y con gusto te responderemos en cuanto podamos</p>
        <hr/>
        <ContactoForm />
      </section> 
    )
  }
}

export default Contacto;