import React from 'react';
import PropTypes from 'prop-types';

const Attraction = ({ attraction }) => (
  <div>
    <img src={attraction.imageUrl} alt="A fun activity" />
    name:
    {' '}
    {attraction.name}
    {' '}
    Ratings avg:
    {' '}
    {attraction.ratings.avg}
    {' '}
    Ratings total
    {attraction.ratings.total}
    {attraction.distanceFrom}
    miles
    {' $'}
    {attraction.price}
  </div>
);

Attraction.propTypes = {
  attraction: PropTypes.shape({
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    ratings: PropTypes.shape({
      avg: PropTypes.number,
      total: PropTypes.number,
    }),
    distanceFrom: PropTypes.string,
    basicDescription: PropTypes.string,
  }).isRequired,
};
export default Attraction;
