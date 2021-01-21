import React from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import Restaurants from './Restaurants';
import Attractions from './Attractions';
import MainAttraction from './MainAttraction';

const NearbyInfo = ({
  location, restaurants, attractions, mainAttraction,
}) => (
  <div>
    <div>
      <Location
        location={location}
      />
    </div>
    <div className="restaurants-attractions">
      Best Nearby
      <div>
        <Restaurants
          restaurants={restaurants}
        />
      </div>
      <div>
        <Attractions
          attractions={attractions}
        />
      </div>
    </div>
    <div className="main-attraction">
      Get to know the area
      <MainAttraction
        mainAttraction={mainAttraction}
      />
    </div>
  </div>
);

NearbyInfo.propTypes = {
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
  restaurants: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    ratings: PropTypes.shape({
      avg: PropTypes.number,
      total: PropTypes.number,
    }),
    imageUrl: PropTypes.string,
    distanceFrom: PropTypes.string,
    foodType: PropTypes.string,
    Price: PropTypes.number,
  })).isRequired,
  mainAttraction: PropTypes.shape({
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

export default NearbyInfo;
