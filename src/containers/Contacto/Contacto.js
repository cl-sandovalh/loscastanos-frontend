import React, { Component } from 'react';

import ContactoForm from '../../components/Contacto/ContactoForm';

class Contacto extends Component {
  render() {
    return (
      <section class="container my-5">
        <h4 className="display-4 text-center">Contáctanos</h4>
        <p class="lead text-center mt-3 ">Si tienes alguna pregunta puedes escribirnos y con gusto te responderemos en cuanto podamos.</p>
        <hr />
        <ContactoForm />
      </section> 
    )
  }
}

export default Contacto;