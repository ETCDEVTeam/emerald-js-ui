import React from 'react';
import { shallow } from 'enzyme';
import * as Icons from './index';

test('Icons', () => {
  const icons = [
    Icons.Search,
    Icons.Repeat,
    Icons.Close,
    Icons.Check,
    Icons.Add,
    Icons.ArrowLeft,
    Icons.Delete,
    Icons.Edit,
    Icons.Eye,
    Icons.Gear,
    Icons.Ledger,
    Icons.ArrowRight,
  ];
  icons.forEach(i => expect(shallow(React.createElement(i))).toBeDefined());
});
