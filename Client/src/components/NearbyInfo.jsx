import React from 'react';
import Location from './Location';
import RestaurantsList from './Restaurants';
import AttractionsList from './Attractions';
import MainAttraction from './MainAttraction';

const NearbyInfo = (props) => (
  <div>
    <div>
      Location
      <Location />
    </div>
    <div className="restaurants-attractions">
      Best Nearby
      <div>
        <RestaurantsList />
      </div>
      <div>
        <AttractionsList />
      </div>
    </div>
    <div className="main-attraction">
      Get to know the area
      <MainAttraction />
    </div>
  </div>
);

export default NearbyInfo;
