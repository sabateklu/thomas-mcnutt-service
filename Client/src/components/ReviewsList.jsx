import React from 'react';
import PropTypes from 'prop-types';
import Review from './Review';

const Reviews = ({ reviews }) => (
  <div>
    <div>
      <Review
        review={reviews[0]}
      />
    </div>
    <div>
      <Review review={reviews[1]} />
    </div>
    <div>
      <Review review={reviews[2]} />
    </div>
  </div>
);

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.String).isRequired,
};

export default Reviews;
