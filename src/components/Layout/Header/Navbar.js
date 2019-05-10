import React, { Component } from 'react';

import styles from './Navbar.module.css';

import MobileMenuButton from './MobileMenuButton';
import MobileMenu from './MobileMenu';
import DesktopMenuItems from './DesktopMenuItems';
import Logo from './Logo';

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
        <nav className={styles.Navbar + " navbar navbar-expand navbar-dark"}>
          <Logo />
          <DesktopMenuItems />
          <MobileMenuButton open={this.mobileMenuOpenHandler} />
        </nav>
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