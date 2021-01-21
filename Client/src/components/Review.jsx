import React from 'react';
import PropTypes from 'prop-types';

const Review = ({ review }) => (
  <div>
    <p>{review}</p>
  </div>
);

Review.propTypes = {
  review: PropTypes.string.isRequired,
};

export default Review;
