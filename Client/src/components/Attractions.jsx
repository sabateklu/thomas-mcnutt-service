import React from 'react';
import PropTypes from 'prop-types';
import Attraction from './Attraction';

const Attractions = ({ attractions }) => (
  <div className="attractions-list">
    <h3>6 other attractions</h3>
    <h5>within 1 miles</h5>
    <div>
      <Attraction
        attraction={attractions[0]}
      />
    </div>
    <div>
      <Attraction
        attraction={attractions[1]}
      />
    </div>
    <div>
      <Attraction
        attraction={attractions[2]}
      />
    </div>
  </div>
);

Attractions.propTypes = {
  attractions: PropTypes.arrayOf(PropTypes.shape({
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
  })).isRequired,
};

export default Attractions;
