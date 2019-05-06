import React, { Component } from 'react';

import Desktop from './Desktop/Desktop';
import Mobile from './Mobile/Mobile';
import MobileMenu from './Mobile/MobileMenu/MobileMenu';

class Navbar extends Component {
  state = {
    mobileMenu: false,
    email: null,
    password: null
  }

  // MobileMenu toggle:
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

  // MobileMenu login:
  emailChangeHandler = (event) => {
    this.setState({
      email: event.target.value
    });
  }

  passwordChangeHandler = (event) => {
    this.setState({
      password: event.target.value
    });
  }

  loginSubmitHandler = (event) => {
    this.mobileMenuCloseHandler();
    console.log(event.target.checkValidity());
  }


  render() {
    return (
      <>
        <Desktop />
        <Mobile open={this.mobileMenuOpenHandler} />
        <MobileMenu 
          toggle={this.state.mobileMenu} 
          close={this.mobileMenuCloseHandler} 
          emailChange={this.emailChangeHandler}
          passwordChange={this.passwordChangeHandler}
          loginSubmit={this.loginSubmitHandler}
        />
      </>
    )
  }
}

export default Navbar;