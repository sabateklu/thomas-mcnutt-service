import React from 'react';
import Reviews from './ReviewsList';
import Map from './Map';
import NearbyInfo from './NearbyInfo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div className="reviews">
          <Reviews />
        </div>
        <div className="map">
          <Map />
        </div>
        <div className="information-panel">
          <NearbyInfo />
        </div>
      </div>
    );
  }
}

export default App;
