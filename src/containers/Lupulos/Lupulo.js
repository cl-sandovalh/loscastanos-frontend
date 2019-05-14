import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

import Spinner from '../../components/UI/Spinner';
import ProgressTop from '../../components/UI/ProgressTop';
import LupuloInformacion from '../../components/Lupulo/LupuloInformacion';
import LupuloCarro from '../../components/Lupulo/LupuloCarro';

class Lupulo extends Component {
  state = {
    lupulo: null,
    error: false,
    selectedType: 'flor'
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

  handleLupuloType = (event) => {
    this.setState({
      selectedType: event.target.value
    });
    
  }

  render() {
    let lupulo = <Spinner />

    if (this.state.error) {
      lupulo = <p className="lead text-center my-5">El producto no existe.</p>
    }
    
    if (this.state.lupulo) {
      lupulo = (
        <>
          <h4 className="display-4">{this.state.lupulo.name}</h4>
          <hr />
          <div className="row">
            <LupuloInformacion lupulo={this.state.lupulo} />
            <LupuloCarro lupulo={this.state.lupulo} selectedType={this.state.selectedType} handleLupuloType={this.handleLupuloType} />
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