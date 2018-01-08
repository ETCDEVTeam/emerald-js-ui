import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';
import { FlatButton } from 'material-ui';

describe('Button', () => {
  it('shows a default button', () => {
    const button = shallow(<Button label="My Label"/>);
    expect(button.find(FlatButton).length > 0).toEqual(true);
  });

  it('shows a primary button', () => {
    const button = shallow(<Button primary label="My Label"/>);
    expect(button.find(FlatButton).props().primary).toEqual(true);
  });
});

