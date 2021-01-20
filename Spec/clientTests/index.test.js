import React from 'react';
import { shallow } from 'enzyme';
// import { shallow, mount } from 'enzyme';
// import {
//   describe, beforeAll, afterAll, expect, test, it,
// } from 'jest';
import App from '../../Client/src/components/App';

describe('App component', () => {
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

  test('Renders', () => {
    const wrapper = shallow(<App />, { context: 'hello' });

    expect(wrapper.exists()).toBe(true);
  });
});
