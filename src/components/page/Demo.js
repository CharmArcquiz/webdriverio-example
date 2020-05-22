import React from 'react';
import './Demo.scss';
import Copy from '../common/Copy';
import DemoForm from '../demo/DemoForm';

const Demo = () => (
  <div className="contact">
    <h1 className="title">Contact Us</h1>
    <div className="columns">
      <div className="column">
        <Copy>
          <p>Interested in trying it out for yourself? Fill out the form and an expert will be in touch shortly.</p>
        </Copy>
      </div>
      <div className="column">
        <DemoForm />
      </div>
    </div>
  </div>
);

export default Demo;
