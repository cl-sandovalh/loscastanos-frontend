import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return(
    <NavLink to="/" exact className="navbar-brand">Los Castaños</NavLink>
  );
}

export default Logo;