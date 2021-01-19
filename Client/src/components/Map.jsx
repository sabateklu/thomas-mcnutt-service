import React from 'react';
import GoogleMap from 'google-map-react';

import Key from '../../../googleApiKey';

const Map = (props) => {
  const mapInfo = {
    center: [59.533, 30.337],
    zoom: 9,
    coords: {
      lat: 59.533,
      lng: 30.337,
    },
  };

  return (
    <div className="google-map">
      <GoogleMap
        bootstrapURLKeys={{ key: Key }}
        center={mapInfo.center}
        zoom={mapInfo.zoom}
      />
    </div>
  );
};

export default Map;
