import React, { Component } from 'react';

import Nosotros from '../../components/Inicio/Nosotros';
import Cosecha from '../../components/Inicio/Cosecha';
import Galeria from '../../components/Inicio/Galeria';

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