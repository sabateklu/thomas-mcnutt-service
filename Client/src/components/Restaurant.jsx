import React from 'react';
import PropTypes from 'prop-types';
import { StyledImg } from '../componentStyles';

const Restaurant = ({ restaurant }) => (
  <div>
    <StyledImg variant="square" src={restaurant.imageUrl} alt="Tasty looking food" />
    Name:
    {' '}
    {restaurant.name}
    Avg Rating:
    {' '}
    {restaurant.ratings.avg}
    total ratings:
    {' '}
    {restaurant.ratings.total}
    Distance from:
    {restaurant.distanceFrom}
    miles
    Food type:
    {' '}
    {restaurant.foodType}
    Food Price/5
    {' '}
    {restaurant.price}
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
    distanceFrom: PropTypes.string,
    foodType: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
export default Restaurant;
