import React from 'react';
import PropTypes from 'prop-types';

const Restaurant = ({ restaurant }) => (
  <div>
    <img src={restaurant.imageUrl} alt="Tasty looking food" />
    {restaurant.name}
    {restaurant.ratings.avg}
    {restaurant.ratings.total}
    {/* Distance in time
    price/food type */}
  </div>
);

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string,
    ratings: PropTypes.shape({
      avg: PropTypes.number,
      total: PropTypes.number,
    }),
    imageUrl: PropTypes.string,
  }).isRequired,
};
export default Restaurant;
