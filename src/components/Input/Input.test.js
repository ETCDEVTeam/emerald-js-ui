import React from 'react';
import { shallow } from 'enzyme';
import { Input } from './Input';

import styles from './styles';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });
const classes = Object.keys(styles).reduce(reduceClasses, {});

test('Renders', () => {
  const component = shallow(<Input classes={classes} />);
});

test('should wrap TextField', () => {
  const wrapper = shallow(<Input classes={classes} />);
  expect(wrapper.text()).toContain('TextField');
});
