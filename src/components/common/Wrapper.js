import React from 'react';
import './Wrapper.scss';

const Wrapper = ({ children }) => (
  <div className="section">
    <div className="container">
      { children }
    </div>
  </div>
);

export default Wrapper;
