import React from 'react';
import Axios from 'axios';
import { StyledDoc } from '../componentStyles';
import Reviews from './Reviews';
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
    return Axios.get('http://localhost:3000/api/location')
    // Axios.get('/api/restaurant')
      .then((result) => {
        const { data } = result;
        this.setState({
          location: data,
        });
      })
      .catch((err) => { console.log(err); });
  }

  getRestaurants() {
    Axios.get('http://localhost:3000/api/restaurant')
    // Axios.get('/api/restaurant')
      .then((result) => {
        const { data } = result;
        this.setState({
          restaurants: data,
        });
      })
      .catch((err) => { console.log(err); });
  }

  getAttractions() {
    Axios.get('http://localhost:3000/api/attraction')
    // Axios.get('/api/attraction')
      .then((result) => {
        this.setState({
          attractions: result.data,
        });
      })
      .then(() => {
        const { attractions } = this.state;
        this.setState({
          mainAttraction: attractions[3],
        });
      })
      .catch((err) => { console.log(err); });
  }

  render() {
    const {
      location, restaurants, mainAttraction, attractions,
    } = this.state;
    return (
      <StyledDoc>
        { location
            && (
              <div>
                <div className="reviews">
                  What travelers are saying
                  {location.ratings.avg}
                  {location.ratings.total}
                  <Reviews
                    reviews={location.reviews}
                    // ratings={location.ratings}
                  />
                </div>
                <div className="map">
                  <Map
                    coords={location.coords}
                  />
                </div>
              </div>
            ) }
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
        API
      </StyledDoc>
    );
  }
}

export default App;
