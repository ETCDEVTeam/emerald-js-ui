import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import AppBar from '../../src/components/AppBar';
import { withKnobs, text, boolean, number, array, object } from '@storybook/addon-knobs/react';

import { muiTheme as storyBookMuiTheme } from 'storybook-addon-material-ui';

import muiTheme from '../../src/theme/index';

storiesOf('AppBar', module)
  .addDecorator(storyBookMuiTheme(muiTheme))
  .addDecorator(withKnobs)
  .add('AppBar', () => (
    <AppBar
      title={text('title', 'Emerald')}
      subtitle={text('subtitle', 'App Bar')}
      blockNumber={number('blockNumber', 15999999)}
      fiatBalance={number('fiatBalance', 20000.00)}
      fiatSymbol={text('fiatSymbol', 'USD')}
      balance={number('balance', 200.00)}
      symbol={text('symbol', 'ETC')}
    />
  ));