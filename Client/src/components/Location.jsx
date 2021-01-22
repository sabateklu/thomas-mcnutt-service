import React from 'react';
import PropTypes from 'prop-types';

const Location = ({ location }) => (
  <div>
    <h2>Location</h2>
    <h3>Contact</h3>
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
    <p>{location.website}</p>
    <p>{location.phoneNum}</p>
    <p>{location.email}</p>
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
    reviews: PropTypes.arrayOf(PropTypes.string),
    website: PropTypes.string,
    phoneNum: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default Location;
