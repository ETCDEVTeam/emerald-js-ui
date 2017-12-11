import React from 'react';
import { shallow } from 'enzyme';
import { Edit as EditIcon } from '../../icons';
import { Account } from './Account';
import Address from '../Address';
import styles from './styles';

const reduceClasses = (prev, curr) => Object.assign({}, prev, { [curr]: curr });
const classes = Object.keys(styles).reduce(reduceClasses, {});

describe('Account', () => {
  it('shows Address when addr provided', () => {
    const accountAddr = shallow(<Account classes={classes} addr="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98" />);
    expect(accountAddr.find(Address).props().id).toEqual('0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98');
  });
  it('not editable by default', () => {
    const accountAddr = shallow(<Account classes={classes} addr="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98" />);
    expect(accountAddr.find(EditIcon)).toHaveLength(0);
  });
});

