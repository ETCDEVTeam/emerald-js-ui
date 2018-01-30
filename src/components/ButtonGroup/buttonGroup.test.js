import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';
import { ButtonGroup } from './buttonGroup';

import styles from './styles';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });
const classes = Object.keys(styles).reduce(reduceClasses, {});

test('Empty children list', () => {
  const component = shallow(<ButtonGroup classes={classes} />);
});

test('Renders children list', () => {
  const wrapper = shallow(<ButtonGroup classes={classes}>
    <Button />
    <Button />
  </ButtonGroup>);
  expect(wrapper.children()).toHaveLength(2);
});
