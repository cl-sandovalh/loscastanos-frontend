import React, { Component } from 'react';
import axios from 'axios';

import Spinner from '../../../components/UI/Spinner/Spinner';

class Lupulo extends Component {
  state = {
    lupulo: null,
    loaded: false,
    error: false
  };

  componentDidMount() {
		if (this.props.match.params.id) {
      axios.get(`https://loscastanos-d8489.firebaseio.com/lupulos/${this.props.match.params.id}.json`)
      .then(response => {
        this.setState({
          lupulo: response.data,
          loaded: true
        });
      })
      .catch(error => {
        this.setState({
          error: true
        });
      });
    }
  }

  render() {
    let lupulo = <Spinner />

    if (this.state.loaded && (this.state.error || !this.state.lupulo)) {
      lupulo = <p className="lead text-center">El producto no existe.</p>
    }
    
    if (this.state.lupulo) {
      lupulo = (
        <>
          <h4 className="display-4">{this.state.lupulo.nombre}</h4>
          <hr />
          <strong>Tipo: </strong>{this.state.lupulo.tipo}<br />
          <strong>Descripcion: </strong>{this.state.lupulo.descripcion}<br />
          <strong>Precio: </strong>{this.state.lupulo.precio}<br />
          <strong>Stock: </strong>{this.state.lupulo.stock}<br />
          <strong>Tamaño cono: </strong>{this.state.lupulo.tamaño_cono}<br />
          <strong>Forma cono: </strong>{this.state.lupulo.forma_cono}<br />
          <strong>Lupulina: </strong>{this.state.lupulo.lupulina}<br />
          <strong>Densidad cono: </strong>{this.state.lupulo.densidad_cono}<br />
          <strong>Capacidad cono: </strong>{this.state.lupulo.capacidad_cono}<br />
          <strong>Facilidad cosecha: </strong>{this.state.lupulo.facilidad_cosecha}<br />
          <strong>Alfa acidos: </strong>{this.state.lupulo.alfa_acidos}<br />
          <strong>Beta acidos: </strong>{this.state.lupulo.beta_acidos}<br />
          <strong>Cohumulonas: </strong>{this.state.lupulo.cohumulonas}<br />
          <strong>Colupulonas: </strong>{this.state.lupulo.colupulonas}<br />
          <strong>Indice almacenamiento: </strong>{this.state.lupulo.indice_almacenamiento}<br />
          <strong>Humedad: </strong>{this.state.lupulo.humedad}
        </>
      );
    }

    return (
      <div className="container my-5">
        {lupulo}
      </div>
    );
  }
}

export default Lupulo;