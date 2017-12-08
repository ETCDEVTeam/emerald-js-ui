import React from 'react';
import { shallow } from 'enzyme';

import { Address } from './Address';
import styles from './styles';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });
const classes = Object.keys(styles).reduce(reduceClasses, {});

describe('Address', () => {
  it('shows address', () => {
    const accountAddr = shallow(<Address classes={classes} id="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98" />);

    expect(accountAddr.find('div').children().find('div').first()
      .text()).toEqual('0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98');
  });

  it('shows shortened address', () => {
    const accountAddr = shallow(<Address classes={classes} shortened id="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98" />);

    expect(accountAddr.find('div').children().find('div').first()
      .text()).toEqual('0xFBb1b...0fBB98');
  });

  it('shows sanitized hex', () => {
    const accountAddr = shallow(<Address classes={classes} shortened id="FBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98" />);

    expect(accountAddr.find('div').children().find('div').first()
      .text()).toEqual('0xFBb1b...0fBB98');
  });
});

