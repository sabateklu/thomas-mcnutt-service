import React from 'react';
import PropTypes from 'prop-types';
import Restaurant from './Restaurant';

const RestaurantsList = ({ restaurants }) => (
  <div>
    {console.log(restaurants)}
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

RestaurantsList.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    ratings: PropTypes.shape({
      avg: PropTypes.number,
      total: PropTypes.number,
    }),
    imageUrl: PropTypes.string,
  })).isRequired,
};

export default RestaurantsList;
