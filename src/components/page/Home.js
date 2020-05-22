import React from 'react';
import './Home.scss';
import LoremIpsum from '../common/LoremIpsum';

const Home = () => (
  <div className="home">
    <h1 className="title">Home Page</h1>
    <LoremIpsum />
    <LoremIpsum />
    <LoremIpsum />
  </div>
);

export default Home;
