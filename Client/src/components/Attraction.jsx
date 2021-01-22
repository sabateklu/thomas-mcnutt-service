import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { StyledImg } from '../componentStyles';

const Attraction = ({ attraction }) => (
  <Grid container spacing={1}>
    <Grid item xs={5}>
      <StyledImg variant="square" src={attraction.imageUrl} alt="A fun activity" />
    </Grid>
    <Grid item xs={7}>
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
    </Grid>
  </Grid>
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
