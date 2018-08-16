import React from 'react';
import PropTypes from 'prop-types';
import { EthRpc, JsonRpc } from 'emerald-js';

import { HttpTransportContext } from './HttpTransportProvider';

const EthRpcCallContext = React.createContext({});

class EthRpcProvider extends React.Component {
  static propTypes = {
    method: PropTypes.string.isRequired,
    params: PropTypes.array,
    transport: PropTypes.object.isRequired,
  };

  static defaultProps = {
    method: null,
    params: null,
  };

  constructor() {
    super();

    this.state = {
      ethrpc: null,
      result: null,
    };
  }

  componentDidMount() {
    this.setEthRpc();
  }

  componentDidUpdate(prevProps, prevState) {
    const transportChanged = prevProps.transport !== this.props.transport;
    if (transportChanged) {
      return this.setEthRpc();
    }

    const ethrpcChanged = prevState.ethrpc !== this.state.ethrpc;
    const methodChanged = prevProps.method !== this.props.method;
    const paramsChanged = prevProps.params !== this.props.params;

    if (ethrpcChanged || methodChanged || paramsChanged) {
      return this.getResult();
    }
  }

  setEthRpc() {
    const jsonRpc = new JsonRpc(this.props.transport);
    const ethrpc = new EthRpc(jsonRpc);

    this.setState({ ethrpc });
  }

  getResult() {
    const method = this.props.method
      .split('.')
      .reduce((memo, item) => memo[item], this.state.ethrpc);
    const params = this.props.params || [];
    return method.call(this.state.ethrpc, ...params)
      .then((result) => this.setState({ ...this.state, result }));
  }

  render() {
    if (this.state.result === null) { return null; }
    return (
      <EthRpcCallContext.Provider value={this.state.result}>
        {this.props.children}
      </EthRpcCallContext.Provider>
    );
  }
}

export default ({method, params, refresh, children}) => {
  return (
    <HttpTransportContext.Consumer>
      {({ httpTransport }) => {
         const props = {
           method,
           params,
           refresh,
           transport: httpTransport,
         };
         return (
           <EthRpcProvider {...props}>
             <EthRpcCallContext.Consumer>
               {children}
             </EthRpcCallContext.Consumer>
           </EthRpcProvider>
         );
      }}
    </HttpTransportContext.Consumer>
  );
}
