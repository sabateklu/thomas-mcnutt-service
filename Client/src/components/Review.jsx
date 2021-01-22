import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper } from '@material-ui/core';

const Review = ({ review }) => (
  <Grid item xs={12}>
    <Paper>{review}</Paper>
  </Grid>
);

Review.propTypes = {
  review: PropTypes.string.isRequired,
};

export default Review;
