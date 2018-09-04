import React from 'react';
import { storiesOf } from '@storybook/react';
import AppBar from '../../src/components/AppBar';
import NetworkSelector from '../../src/smart-components/NetworkSelector';
import BlockNumber from '../../src/components/BlockNumber';
import AccountSelect from '../../src/components/AccountSelect';
import EtcBalance from '../../src/components/EtcBalance';
import EthRpc from '../../src/providers/EthRpc';
import VaultRpc from '../../src/providers/VaultRpc';
import { withKnobs, text, boolean, number, array, object } from '@storybook/addon-knobs/react';


storiesOf('AppBar', module)
  .addDecorator(withKnobs)
  .addWithJSX('AppBar', () => {
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
            <EthRpc method="eth.getBlockNumber">
              {blockNumber => <BlockNumber blockNumber={blockNumber} />}
            </EthRpc>
            <VaultRpc method="listAccounts">
              {accounts => {
                 const address = this.state.account || accounts[0].address;
                 return (
                   <React.Fragment>
                     <EthRpc method="eth.getBalance" params={[address]}>
                       {balance => <EtcBalance account={address} balance={balance} gutterRight/>}
                     </EthRpc>
                     <AccountSelect accounts={accounts.map((a) => a.address)} onChange={this.state.changeAccount} selectedAccount={address} />
                   </React.Fragment>
                 )}
              }
            </VaultRpc>
          </AppBar>
        )
      }
    }
    return <AppBarApp />;
  });
