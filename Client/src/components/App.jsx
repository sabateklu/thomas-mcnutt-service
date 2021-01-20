import React from 'react';
import Axios from 'axios';
// import Reviews from './ReviewsList';
import Map from './Map';
import NearbyInfo from './NearbyInfo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      restaurants: null,
      attractions: null,
      mainAttraction: null,
    };
    this.setState = this.setState.bind(this);
  }

  componentDidMount() {
    this.getLocation();
    this.getRestaurants();
    this.getAttractions();
  }

  getLocation() {
    return Axios.get('./api/location')
      .then((result) => {
        const { data } = result;
        console.log(data);
        this.setState({
          location: data,
        });
      })
      .catch((err) => { console.log(err); });
  }

  getRestaurants() {
    Axios.get('./api/restaurant')
      .then((result) => {
        const { data } = result;
        console.log(data);
        this.setState({
          restaurants: data,
        });
      })
      .catch((err) => { console.log(err); });
  }

  getAttractions() {
    Axios.get('./api/attraction')
      .then((result) => {
        this.setState({
          attractions: result.data,
        });
      })
      .then(() => {
        const { attractions } = this.state;
        this.setState({
          mainAttraction: attractions[0],
        });
      })
      .catch((err) => { console.log(err); });
  }

  render() {
    const {
      location, restaurants, mainAttraction, attractions,
    } = this.state;
    return (
      <div>
        {/* <div className="reviews">
          <Reviews />
        </div> */}
        { location
            && (
              <div className="map">
                <Map
                  coords={location.coords}
                />
              </div>
            ) }
        {console.log(attractions)}
        {location && restaurants && mainAttraction && attractions && (
          <div className="information-panel">
            <NearbyInfo
              location={location}
              restaurants={restaurants}
              mainAttraction={mainAttraction}
              attractions={attractions}
            />
          </div>
        ) }
      </div>
    );
  }
}

export default App;
