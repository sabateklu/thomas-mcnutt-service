import React from 'react';
import { shallow } from 'enzyme';
import App from '../../Client/src/components/App';
import Attraction from '../../Client/src/components/Attraction';
import Attractions from '../../Client/src/components/Attractions';
import Location from '../../Client/src/components/Location';
import Map from '../../Client/src/components/Map';
import Restaurant from '../../Client/src/components/Restaurant';
import Restaurants from '../../Client/src/components/Restaurants';
import NearbyInfo from '../../Client/src/components/NearbyInfo';
import { exampleLocation, exampleAttractions, exampleRestaurants } from './exampleData';

describe('App component', () => {
  test('Renders', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('NearbyInfo component', () => {
  test('Renders', () => {
    const wrapper = shallow(<NearbyInfo
      location={exampleLocation}
      restaurants={exampleRestaurants}
      mainAttraction={exampleAttractions[0]}
      attractions={exampleAttractions}
    />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('Restaurants component', () => {
  test('Renders', () => {
    const wrapper = shallow(<Restaurants
      restaurants={exampleRestaurants}
    />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('Restaurant component', () => {
  test('Renders', () => {
    const wrapper = shallow(<Restaurant
      restaurant={exampleRestaurants[0]}
    />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('Map component', () => {
  test('Renders', () => {
    const wrapper = shallow(<Map
      coords={exampleLocation.coords}
    />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('Location component', () => {
  test('Render', () => {
    const wrapper = shallow(<Location
      location={exampleLocation}
    />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('Attraction component', () => {
  test('Renders', () => {
    const wrapper = shallow(<Attraction
      attraction={exampleAttractions[0]}
    />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('Attractions component', () => {
  test('Renders', () => {
    const wrapper = shallow(<Attractions
      attractions={exampleAttractions}
    />);
    expect(wrapper.exists()).toBe(true);
  });
});

// Chris Example
// describe('', () => {
//   beforeEach(() => {
//     let wrapper;
//     beforeEach(() => {
//       wrapper = shallow(<App />);
//     });
//     test('App should have a title that renders from props', () => {
//       wrapper.setProps({ header: 'Test Header' });
//       wrapper.update();
//       const header = wrapper.find('h3').first();
//       expect(header.text()).toEqual('Test Header');
//     });
//   });
//   test('App should have a button element', () => {
//     expect(wrapper.find('button')).toHaveLength(1);
//   });
//   test('Expect testFunc to run on button click', () => {
//     const instance = wrapper.instance();
//     const spy = jest.spyOn(instance, 'testFunc');
//     wrapper.find('button').first().simulate('click');
//     expect(spy).toHaveBeenCalledTimes(1);
//   });
// });
