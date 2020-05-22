import React from 'react';
import './About.scss';
import LoremIpsum from '../common/LoremIpsum';

const About = () => (
  <div className="about">
    <h1 className="title">About Us</h1>
    <LoremIpsum />
    <LoremIpsum />
    <LoremIpsum />
  </div>
);

export default About;
