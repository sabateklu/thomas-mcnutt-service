import React from 'react';
import PropTypes from 'prop-types';

const Location = ({ location }) => (
  <div>
    <p>
      {location.address.city}
      {' '}
      {location.address.country}
    </p>
    <p>
      {location.address.street}
      {' '}
      {location.address.zip}
    </p>
    {/* <p>website</p>
    <p>phone #</p>
    <p>email</p> */}
  </div>
);

Location.propTypes = {
  location: PropTypes.shape({
    Name: PropTypes.string,
    address: PropTypes.shape({
      city: PropTypes.string,
      country: PropTypes.string,
      street: PropTypes.string,
      zip: PropTypes.string,
    }),
    coords: PropTypes.shape({
      lat: PropTypes.number,
      long: PropTypes.number,
    }),
    ratings: PropTypes.shape({
      avg: PropTypes.number,
      total: PropTypes.number,
    }),
  }).isRequired,
};

export default Location;
