import React from 'react';
import './Thanks.scss';
import Copy from '../common/Copy';
import LoremIpsum from '../common/LoremIpsum';

const Thanks = () => (
  <div className="thanks">
    <h1 className="title">Thank You</h1>
    <h2 className="subtitle">You'll be hearing from us very soon.</h2>
    <Copy>
      <p>
        We appreciate hearing from our customers and will always make you our first priority.
      </p>
    </Copy>
    <LoremIpsum />
  </div>
);

export default Thanks
