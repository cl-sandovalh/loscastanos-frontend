import React, { Component } from 'react';

import Header from '../components/Layout/Header/Header';
// import Footer from '../../components/Layout/Footer/Footer';

class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          {this.props.children}
        </main>
        {/* <Footer /> */}
      </>
    )
  }
}

export default Layout;
