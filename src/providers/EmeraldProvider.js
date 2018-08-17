import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { EthJsonRpcProvider } from '../providers/HttpTransportProvider';
import { VaultJsonRpcProvider } from '../providers/VaultJsonRpcProvider';

import theme from '../theme';

export class EmeraldProvider extends React.Component {
  static propTypes = {
    ethUrl: EthJsonRpcProvider.defaultUrl,
    vaultUrl: EthJsonRpcProvider.defaultUrl,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    ethUrl: EthJsonRpcProvider.defaultUrl,
    vaultUrl: EthJsonRpcProvider.defaultUrl,
  };

  constructor() {
    super();
    this.state = {
      rpcUrl: EthJsonRpcProvider.defaultUrl
    };
    this.changeEthUrl = this.changeEthUrl.bind(this);
    this.changeVaultUrl = this.changeVaultUrl.bind(this);
    this.setUrl = this.setUrl.bind(this);
  }

  componentDidMount() {
    const { state, setState, props: { vaultUrl, ethUrl } } = this;
    setState({ ...state, ethUrl, vaultUrl });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.ethUrl !== this.props.ethUrl) {
      this.setUrl('ethUrl', this.props.ethUrl);
    }
    if (prevProps.vaultUrl !== this.props.vaultUrl) {
      this.setUrl('vaultUrl', this.props.ethUrl);
    }
  }

  changeEthUrl(newUrl) {
    this.setUrl('ethUrl', newUrl);
  }

  changeVaultUrl(newUrl) {
    this.setUrl('vaultUrl', newUrl);
  }

  setUrl(key, value) {
    this.setState({ ...this.state, [key]: value });
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />

        <EthJsonRpcProvider url={this.state.ethUrl} changeUrl={this.changeEthUrl}>
          <VaultJsonRpcProvider url={this.state.vaultUrl} changeUrl={this.changeVaultUrl}>
            {this.props.children}
          </VaultJsonRpcProvider>
        </EthJsonRpcProvider>
      </MuiThemeProvider>
    );
  }
}
