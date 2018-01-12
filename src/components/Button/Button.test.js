import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';
import { FlatButton } from 'material-ui';

describe('Button', () => {
  it('shows a default button', () => {
    const button = shallow(<Button label="My Label"/>);
    expect(button.find('Button').dive().find(FlatButton).length > 0).toEqual(true);
  });

  it('shows a primary button', () => {
    const muiWrapper = shallow(<Button primary label="My Label"/>);
    expect(muiWrapper.find('Button').dive().find(FlatButton).props().primary).toEqual(true);
  });
});

