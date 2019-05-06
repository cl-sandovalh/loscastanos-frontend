import React, { Component } from 'react';

import Desktop from './Desktop/Desktop';
import Mobile from './Mobile/Mobile';
import MobileMenu from './Mobile/MobileMenu/MobileMenu';

class Navbar extends Component {
  state = {
    mobileMenu: false
  }

  mobileMenuOpenHandler = () => {
    this.setState({
      mobileMenu: true
    })
  }

  mobileMenuCloseHandler = () => {
    this.setState({
      mobileMenu: false
    })
  }

  render() {
    return (
      <>
        <Desktop />
        <Mobile open={this.mobileMenuOpenHandler} />
        <MobileMenu toggle={this.state.mobileMenu} close={this.mobileMenuCloseHandler} />
      </>
    )
  }
}

export default Navbar;