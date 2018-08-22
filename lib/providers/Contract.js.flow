import React from 'react';
import { contracts } from 'emerald-js';
import PropTypes from 'prop-types';
import EthRpc from './EthRpc';

const ContractCallContext = React.createContext({});

class ContractProvider extends React.Component {
  static propTypes = {
    method: PropTypes.string.isRequired,
    params: PropTypes.array,
    abi: PropTypes.object.isRequired,
    address: PropTypes.string,isRequired
  };

  static defaultProps = {
    method: null,
    params: null,
    abi: null
  };

  constructor() {
    super();

    this.state = {
      data: null,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const abiChanged = prevProps.abi !== this.props.abi;
    const methodChanged = prevProps.method !== this.props.method;
    const paramsChanged = prevProps.params !== this.props.params;
    const addressChanged = prevProps.address !== this.props.address;

    if (addressChanged || abiChanged || methodChanged || paramsChanged) {
      return this.setData();
    }
  }

  setData() {
    const func = this.props.abi.find((f) => f.name === this.props.method);
    const data = contracts.functionToData(func, this.props.params);
    this.setState({data});
  }

  render() {
    if (this.state.data === null) { return null; }
    return (
      <EthRpc method="eth.call" params={{to: this.props.address, data: this.state.data}}>
        {this.props.children}
      </EthRpc>
    );
  }
}

export default ContractProvider;