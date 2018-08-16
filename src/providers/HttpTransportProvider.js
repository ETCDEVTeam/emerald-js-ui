import React from 'react';
import PropTypes from 'prop-types';
import { HttpTransport } from 'emerald-js';

const noop = () => {};

export const HttpTransportContext = React.createContext({
  httpTransport: null,
  changeUrl: noop,
});

export class HttpTransportProvider extends React.Component {
  static defaultUrl = 'https://web3.gastracker.io/';
  static localUrl = 'http://localhost:8545';

  static propTypes = {
    url: PropTypes.string,
    changeUrl: PropTypes.func,
  };

  static defaultProps = {
    url: HttpTransportProvider.defaultUrl,
    changeUrl: noop,
  };

  componentWillMount() {
    this.setHttpTransport();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) this.setHttpTransport();
  }

  setHttpTransport() {
    const httpTransport = new HttpTransport(this.props.url);
    return this.setState({ httpTransport });
  }

  render() {
    return (
      <HttpTransportContext.Provider value={{ ...this.state, changeUrl: this.props.changeUrl }}>
        {this.props.children}
      </HttpTransportContext.Provider>
    );
  }
}
