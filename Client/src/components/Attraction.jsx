import React from 'react';
import PropTypes from 'prop-types';
import { StyledImg } from '../componentStyles';

const Attraction = ({ attraction }) => (
  <div>
    <StyledImg variant="square" src={attraction.imageUrl} alt="A fun activity" />
    name:
    {' '}
    {attraction.basicDescription}
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
// style={{ height: 50, width: 50 }}

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
