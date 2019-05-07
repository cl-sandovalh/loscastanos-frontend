import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Layout from './hoc/Layout/Layout';
import Inicio from './containers/Inicio/Inicio';
import Lupulos from './containers/Lupulos/Lupulos';
import Lupulo from './containers/Lupulos/Lupulo/Lupulo';
import Contacto from './containers/Contacto/Contacto';
import Pagar from './containers/Pagar/Pagar';
import Ingresar from './containers/Ingresar/Ingresar';
import Registro from './containers/Registro/Registro';
import Carro from './containers/Carro/Carro';

function App() {
  return (
    <BrowserRouter>
      <Layout>
          <Switch>
            <Route path="/inicio" component={Inicio} />
            <Route path="/lupulos/:id" component={Lupulo} />
            <Route path="/lupulos" exact component={Lupulos} />
            <Route path="/contacto" component={Contacto} />
            <Route path="/pagar" component={Pagar} />
            <Route path="/ingresar" component={Ingresar} />
            <Route path="/registro" component={Registro} />
            <Route path="/carro" component={Carro} />
            <Route path="/" exact component={Inicio} />
          </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
