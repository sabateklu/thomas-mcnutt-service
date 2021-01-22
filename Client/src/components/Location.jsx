import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import mapMarker from '@iconify-icons/oi/map-marker';
import laptopIcon from '@iconify-icons/carbon/laptop';
import phoneHandsetLine from '@iconify-icons/clarity/phone-handset-line';
import emailIcon from '@iconify-icons/carbon/email';

const Location = ({ location }) => (
  <div>
    <h2>Location</h2>
    <h3>Contact</h3>
    <p>
      <Icon icon={mapMarker} />
      {location.address.city}
      {' '}
      {location.address.country}
    </p>
    <p>
      {location.address.street}
      {' '}
      {location.address.zip}
    </p>
    <p>
      <Icon icon={laptopIcon} />
      {' '}
      {location.website}
    </p>
    <p>
      <Icon icon={phoneHandsetLine} />
      {' '}
      {location.phoneNum}
    </p>
    <p>
      <Icon icon={emailIcon} />
      {' '}
      {location.email}
    </p>
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
