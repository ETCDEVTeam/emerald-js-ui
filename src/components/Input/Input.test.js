import React from 'react';
import { shallow } from 'enzyme';
import { Input } from './Input';

import styles from './styles';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });
const classes = Object.keys(styles).reduce(reduceClasses, {});
const build = () => shallow(<Input muiTheme={{ palette: {} }} classes={classes} />);


test('Renders', () => {
  const component = build();
  expect(component).toBeDefined();
});

test('should wrap TextField', () => {
  const wrapper = build();
  expect(wrapper.text()).toContain('TextField');
});
