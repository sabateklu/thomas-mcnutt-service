import React from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import RestaurantsList from './Restaurants';
import AttractionsList from './Attractions';
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
        <RestaurantsList
          restaurants={restaurants}
        />
      </div>
      <div>
        <AttractionsList
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
  }).isRequired,
  restaurants: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    ratings: PropTypes.shape({
      avg: PropTypes.number,
      total: PropTypes.number,
    }),
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
  })).isRequired,

};

export default NearbyInfo;
