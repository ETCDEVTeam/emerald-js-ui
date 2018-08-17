import React from 'react';
import PropTypes from 'prop-types';
import { HttpTransport, EthRpc, JsonRpc } from 'emerald-js';

const noop = () => {};

export const HttpTransportContext = React.createContext({
  httpTransport: null,
  changeUrl: noop,
});

export class EthJsonRpcProvider extends React.Component {
  static defaultUrl = 'https://web3.gastracker.io/';
  static localUrl = 'http://localhost:8545';

  static propTypes = {
    url: PropTypes.string,
    changeUrl: PropTypes.func,
  };

  static defaultProps = {
    url: EthJsonRpcProvider.defaultUrl,
    changeUrl: noop,
  };

  componentWillMount() {
    this.setHttpTransport();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) this.setHttpTransport();
  }

  setHttpTransport() {
    const ethRpc = new EthRpc(new JsonRpc(new HttpTransport(this.props.url)));
    return this.setState({ ethRpc });
  }

  render() {
    return (
      <HttpTransportContext.Provider value={{ ...this.state, changeUrl: this.props.changeUrl }}>
        {this.props.children}
      </HttpTransportContext.Provider>
    );
  }
}
