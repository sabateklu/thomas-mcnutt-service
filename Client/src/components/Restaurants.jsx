import React from 'react';
import Restaurant from './Restaurant';

const RestaurantsList = (props) => (
  <div>
    <h3>6 other restaurants</h3>
    <h5>within 1 miles</h5>
    <div>
      <Restaurant />
    </div>
    <div>
      <Restaurant />
    </div>
    <div>
      <Restaurant />
    </div>
  </div>
);

export default RestaurantsList;
