import React from 'react';
import Attraction from './Attraction';

const AttractionsList = (props) => (
  <div className="attractions-list">
    <h3>6 other attractions</h3>
    <h5>within 1 miles</h5>
    <div>
      <Attraction />
    </div>
    <div>
      <Attraction />
    </div>
    <div>
      <Attraction />
    </div>
  </div>
);

export default AttractionsList;
