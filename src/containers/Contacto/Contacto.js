import React, { Component } from 'react';

import ContactoForm from '../../components/Contacto/ContactoForm';

class Contacto extends Component {
  render() {
    return (
      <section class="container mt-3">
        <h3 class="text-center text-uppercase">Contactanos</h3>
        <p class="lead text-center mt-3 ">Si tienes alguna pregunta puedes escribirnos y con gusto te responderemos en cuanto podamos</p>
        <ContactoForm />
      </section> 
    )
  }
}

export default Contacto;