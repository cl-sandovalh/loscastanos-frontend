import React, { Component } from 'react';

import Nosotros from '../../components/Inicio/Nosotros/Nosotros';
import Cosecha from '../../components/Inicio/Cosecha/Cosecha';
import Galeria from '../../components/Inicio/Galeria/Galeria';

class Inicio extends Component {
  render() {
    return (
      <>
        <Nosotros />
        <Cosecha />
        <Galeria />
      </>
    )
  }
}

export default Inicio;