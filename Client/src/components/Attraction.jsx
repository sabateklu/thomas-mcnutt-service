import React from 'react';
import PropTypes from 'prop-types';

const Attraction = ({ attraction }) => (
  <div>
    <img src={attraction.imageUrl} alt="A fun activity" />
    {attraction.name}
    {' '}
    {attraction.ratings.avg}
    {' '}
    {attraction.ratings.total}
    {' $'}
    {/* Distance in time */}
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
  }).isRequired,
};
export default Attraction;
