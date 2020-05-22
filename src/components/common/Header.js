import React from 'react';
import './Header.scss';
import Nav from './Nav';

const Header = () => (
  <div className="header">
    <Nav/>
    <section className="hero is-primary is-medium is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            WebdriverIO Example
          </h1>
        </div>
      </div>
    </section>
  </div>
);

export default Header;
