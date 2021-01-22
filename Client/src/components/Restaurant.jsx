import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { StyledImg } from '../componentStyles';

const Restaurant = ({ restaurant }) => (
  <Grid container spacing={1}>
    <Grid item xs={5}>
      <StyledImg variant="square" src={restaurant.imageUrl} alt="Tasty looking food" />
    </Grid>
    <Grid item xs={7}>
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
    </Grid>
  </Grid>
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
