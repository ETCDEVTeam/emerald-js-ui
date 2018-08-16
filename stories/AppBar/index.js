import React from 'react';
import { storiesOf } from '@storybook/react';
import AppBar from '../../src/components/AppBar';
import {AppBar.} from '../../src/components/AppBar/BlockNumber';
import { withKnobs, text, boolean, number, array, object } from '@storybook/addon-knobs/react';

storiesOf('AppBar', module)
  .addDecorator(withKnobs)
  .add('AppBar', () => (
    <AppBar title={text('title', 'Emerald')} subtitle={text('subtitle', 'AppBar')}>
      <CurrentBlockNumber />
    </AppBar>
  ));

/* subtitle={text('subtitle', 'App Bar')}
    blockNumber={number('blockNumber', 15999999)}
    fiatBalance={number('fiatBalance', 20000.00)}
    fiatSymbol={text('fiatSymbol', 'USD')}
    balance={number('balance', 200.00)}
    symbol={text('symbol', 'ETC')} */
