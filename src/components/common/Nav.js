import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => (
  <nav className="navbar main-nav is-light" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">Home</Link>
      <Link className="navbar-item" to="/about">About</Link>
      <div className="buttons">
        <Link className="button is-primary" to="/demo">Request a Demo</Link>
      </div>
    </div>
  </nav>
);

export default Nav;
