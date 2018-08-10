import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import EthereumQRPlugin from 'ethereum-qr-code';

const qr = new EthereumQRPlugin();

export default class TransactionButton extends React.Component {
  static propTypes = {
    transaction: PropTypes.object,
  };

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    window.open(qr.toAddressString(this.props.transaction));
  }

  render() {
    return (
      <Button variant="contained" onClick={this.handleClick}>Send Transaction</Button>
    );
  }
}
