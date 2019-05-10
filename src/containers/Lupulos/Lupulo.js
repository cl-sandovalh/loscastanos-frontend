import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

import Spinner from '../../components/UI/Spinner';
import ProgressTop from '../../components/UI/ProgressTop';

class Lupulo extends Component {
  state = {
    lupulo: null,
    error: false
  };

  componentDidMount() {
		if (this.props.match.params.id) {
      axios.get(`https://loscastanosapi.herokuapp.com/lupulos/${this.props.match.params.id}`)
      .then(response => {
        this.setState({
          lupulo: response.data,
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

    if (this.state.error) {
      lupulo = <p className="lead text-center my-5">El producto no existe.</p>
    }
    
    if (this.state.lupulo) {
      precio = new Intl.NumberFormat('es-CL', {style: 'currency', currency: 'CLP'}).format(this.state.lupulo.amount);
      lupulo = (
        <>
          <h4 className="display-4">{this.state.lupulo.name}</h4>
          <hr />
          <div className="row">
            <div className="col-lg-4 mb-5">
              <div className="text-center"><img className="mw-100 rounded" src={"https://loscastanosapi.herokuapp.com/" + this.state.lupulo.image} alt={this.state.lupulo.name} /></div><br />
              <p><strong>Tipo: </strong><br />{this.state.lupulo.lupulo_type}</p>
              <p><strong>Descripcion: </strong><br />{this.state.lupulo.description}</p>
            </div>
            <div className="col-lg-4 mb-5">
              <h4 className="text-success h3">Características físicas</h4>
              <strong>Tamaño cono: </strong>{this.state.lupulo.cone_size}<br />
              <strong>Forma cono: </strong>{this.state.lupulo.cone_shape}<br />
              <strong>Lupulina: </strong>{this.state.lupulo.lupulin}<br />
              <strong>Densidad cono: </strong>{this.state.lupulo.cone_density}<br />
              <strong>Capacidad cono: </strong>{this.state.lupulo.cone_capacity}<br />
              <strong>Facilidad cosecha: </strong>{this.state.lupulo.ease_harvest}<br />
              <hr />
              <h4 className="text-success h3">Características químicas</h4>
              <strong>Alfa acidos: </strong>{this.state.lupulo.alpha_acids} %<br />
              <strong>Beta acidos: </strong>{this.state.lupulo.beta_acids} %<br />
              <strong>Cohumulonas: </strong>{this.state.lupulo.cohumulones} %<br />
              <strong>Colupulonas: </strong>{this.state.lupulo.columbus} %<br />
              <strong>Indice almacenamiento: </strong>{this.state.lupulo.storage_index} %<br />
              <strong>Humedad: </strong>{this.state.lupulo.humidity} %
            </div>
            <div className="col-lg-4 w-75 mx-auto">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title h2">{precio}</h5>
                  <p className="card-text">Cantidad disponible: {this.state.lupulo.stock}</p>
                  <button to="/carro" className="btn color-1" disabled={this.state.lupulo.stock <= 0 ? true : false}>
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
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><NavLink to="/lupulos" className="text-success">Lupulos</NavLink></li>
              <li className="breadcrumb-item active" aria-current="page">{this.state.lupulo ? this.state.lupulo.name : null} {this.state.error ? "?" : null}</li>
            </ol>
          </nav>
          {lupulo}
        </div>
      </>
    );
  }
}

export default Lupulo;