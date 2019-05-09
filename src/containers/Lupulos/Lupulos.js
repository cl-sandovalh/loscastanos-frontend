import React, { Component } from 'react';
import axios from 'axios';

import Spinner from '../../components/UI/Spinner/Spinner';
import ListaLupulos from '../../components/Lupulos/ListaLupulos/ListaLupulos';
import ProgressTop from '../../components/UI/ProgressTop/ProgressTop';

class Lupulos extends Component {
  state = {
    lupulos: null,
    error: false
  };

  componentDidMount() {
		axios.get('https://loscastanosapi.herokuapp.com/lupulos')
			.then(response => {
				this.setState({
					lupulos: response.data
				})
			})
		.catch(error => {
			this.setState({
				error: true
			})
		});
	}

  render() {
    let lupulos = (
      <>
      <Spinner />
      </>
    );
      

    if (this.state.error) {
      lupulos = <p className="lead text-center">No se encontraron productos.</p>
    }

    if (this.state.lupulos) {
      lupulos = <ListaLupulos lupulos={this.state.lupulos} />;
    }

    return (
      <>
        {!this.state.lupulos && !this.state.error ? <ProgressTop /> : null}
        <div className="container mt-5">
          <h4 className="display-4 text-center">Lupulos</h4>
          <hr />
          {lupulos}
        </div>
      </>
    )
  }
}

export default Lupulos;