import React from 'react';
import { storiesOf } from '@storybook/react';
import AppBar from '../../src/components/AppBar';
import CurrentBlockNumber from '../../src/smart-components/CurrentBlockNumber';
import NetworkSelector from '../../src/smart-components/NetworkSelector';
import AccountSelector from '../../src/smart-components/AccountSelector';
import EtcBalance from '../../src/smart-components/EtcBalance';
import { withKnobs, text, boolean, number, array, object } from '@storybook/addon-knobs/react';

class AppBarApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      account: null,
      changeAccount: account => {
        this.setState({
          ...this.state,
          account
        });
      }
    }
  }

  render() {
    return (
      <AppBar title={text('title', 'Emerald')} subtitle={text('subtitle', 'AppBar')}>
        <NetworkSelector />
        <CurrentBlockNumber />
        <AccountSelector account={this.state.account} onChange={this.state.changeAccount}/>
        <EtcBalance account={this.state.account}/>
      </AppBar>
    )
  }

}

storiesOf('AppBar', module)
  .addDecorator(withKnobs)
  .add('AppBar', () => (
    <AppBarApp />
  ));

/* subtitle={text('subtitle', 'App Bar')}
    blockNumber={number('blockNumber', 15999999)}
    fiatBalance={number('fiatBalance', 20000.00)}
    fiatSymbol={text('fiatSymbol', 'USD')}
    balance={number('balance', 200.00)}
    symbol={text('symbol', 'ETC')} */
