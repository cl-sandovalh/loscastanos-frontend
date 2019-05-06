import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

import Spinner from '../../../components/UI/Spinner/Spinner';
import ProgressTop from '../../../components/UI/ProgressTop/ProgressTop';

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
    let precio = null;
    let lupulo = <Spinner />

    if (this.state.loaded && (this.state.error || !this.state.lupulo)) {
      lupulo = <p className="lead text-center">El producto no existe.</p>
    }
    
    if (this.state.lupulo) {
      precio = new Intl.NumberFormat('es-CL', {style: 'currency', currency: 'CLP'}).format(this.state.lupulo.precio);
      lupulo = (
        <>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><NavLink to="/lupulos" className="text-success">Lupulos</NavLink></li>
              <li className="breadcrumb-item active" aria-current="page">{this.state.lupulo.nombre}</li>
            </ol>
          </nav>
          <h4 className="display-4">{this.state.lupulo.nombre}</h4>
          <hr />
          <div className="row">
            <div className="col-lg-4 mb-5">
              <div className="text-center"><img src="https://via.placeholder.com/300" alt={this.state.lupulo.nombre} /></div><br />
              <p><strong>Tipo: </strong><br />{this.state.lupulo.tipo}</p>
              <p><strong>Descripcion: </strong><br />{this.state.lupulo.descripcion}</p>
            </div>
            <div className="col-lg-4 mb-5">
              <h4 className="text-success h3">Características físicas</h4>
              <strong>Tamaño cono: </strong>{this.state.lupulo.tamaño_cono}<br />
              <strong>Forma cono: </strong>{this.state.lupulo.forma_cono}<br />
              <strong>Lupulina: </strong>{this.state.lupulo.lupulina}<br />
              <strong>Densidad cono: </strong>{this.state.lupulo.densidad_cono}<br />
              <strong>Capacidad cono: </strong>{this.state.lupulo.capacidad_cono}<br />
              <strong>Facilidad cosecha: </strong>{this.state.lupulo.facilidad_cosecha}<br />
              <hr />
              <h4 className="text-success h3">Características químicas</h4>
              <strong>Alfa acidos: </strong>{this.state.lupulo.alfa_acidos}<br />
              <strong>Beta acidos: </strong>{this.state.lupulo.beta_acidos}<br />
              <strong>Cohumulonas: </strong>{this.state.lupulo.cohumulonas}<br />
              <strong>Colupulonas: </strong>{this.state.lupulo.colupulonas}<br />
              <strong>Indice almacenamiento: </strong>{this.state.lupulo.indice_almacenamiento}<br />
              <strong>Humedad: </strong>{this.state.lupulo.humedad}
            </div>
            <div className="col-lg-4 w-75 mx-auto">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title h2">{precio}</h5>
                  <p className="card-text">Cantidad disponible: {this.state.lupulo.stock}</p>
                  <button to="/carro" className="btn btn-success" disabled={this.state.lupulo.stock <= 0 ? true : false}>
                    <i className="fas fa-cart-plus mr-2"></i>Agregar al carro
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }

    return (
      <>
        {!this.state.lupulo && !this.state.error ? <ProgressTop /> : null}
        <div className="container my-5">
          {lupulo}
        </div>
      </>
    );
  }
}

export default Lupulo;