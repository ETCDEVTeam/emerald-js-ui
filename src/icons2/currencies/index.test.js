import React from 'react';
import { shallow } from 'enzyme';
import * as Icons from './index';

test('Icons', () => {
  const icons = [
    Icons.Monero,
    Icons.Bitcoin,
    Icons.EthereumClassic,
    Icons.Ethereum,
    Icons.Litecoin,
    Icons.Zcash,
  ];
  icons.forEach(i => expect(shallow(React.createElement(i))).toBeDefined());
});
