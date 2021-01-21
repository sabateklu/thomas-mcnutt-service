import React from 'react';
import PropTypes from 'prop-types';
import Restaurant from './Restaurant';

const Restaurants = ({ restaurants }) => (
  <div>
    <h3>6 other restaurants</h3>
    <h5>within 1 miles</h5>
    <div>
      <Restaurant
        restaurant={restaurants[0]}
      />
    </div>
    <div>
      <Restaurant
        restaurant={restaurants[1]}
      />
    </div>
    <div>
      <Restaurant
        restaurant={restaurants[2]}
      />
    </div>
  </div>
);

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    ratings: PropTypes.shape({
      avg: PropTypes.number,
      total: PropTypes.number,
    }),
    imageUrl: PropTypes.string,
    distanceFrom: PropTypes.string,
    foodType: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
};

export default Restaurants;
