import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
// import {
//   describe, beforeAll, afterAll, expect, test, it,
// } from 'jest';
import App from '../../Client/src/components/App.jsx';

describe('App component', () => {
  test('Renders', () => {
    const wrapper = shallow(<App />, { context: 'hello' });

    expect(wrapper.exists()).toBe(true);
  });
});
