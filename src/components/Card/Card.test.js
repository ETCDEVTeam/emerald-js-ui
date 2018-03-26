import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';


describe('Card', () => {
  it('it renders without crash', () => {
    const wrapper = shallow(<Card />);
  });
});
