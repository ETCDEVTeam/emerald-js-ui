import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { EthJsonRpcProvider } from './EthJsonRpcProvider';
import { VaultJsonRpcProvider } from './VaultJsonRpcProvider';
import VaultRpc from './VaultRpc';

import theme from '../theme';

export const EmeraldContext = React.createContext();

export class EmeraldProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: null,
      accounts: [],
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
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <EthJsonRpcProvider>
          <VaultJsonRpcProvider>
            <VaultRpc method="listAccounts">
              {accounts => {
                const flattenedAccounts = accounts.map((a) => a.address)
                 return (
                  <EmeraldContext.Provider value={{...this.state, account: this.state.account || flattenedAccounts[0], accounts: flattenedAccounts}}>
                    {this.props.children}
                  </EmeraldContext.Provider>
                )
              }}
            </VaultRpc>
          </VaultJsonRpcProvider>
        </EthJsonRpcProvider>
      </MuiThemeProvider>
    );
  }
}
