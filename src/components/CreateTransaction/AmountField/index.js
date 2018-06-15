import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import FormLabel from '../FormLabel.js';
import Input from '../../Input';
import Button from '../../Button';

class GasLimitField extends React.Component {
  static propTypes = {
    onChangeAmount: PropTypes.func.isRequired,
    amount: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired,
  }

  constructor() {
    super();
    this.onChangeAccount = this.onChangeAccount.bind(this);
  }

  onChangeAmount(event, amount) {
    this.props.onChangeAmount(amount);
  }

  onClickMax() {
    this.props.onChangeAmount(this.props.balance);
  }

  inputStyles = {
    width: '200px',
    marginRight: '10px',
  }

  buttonstyles = {
    height: '30px',
    minwidth: '35px',
    lineheight: '30px',
  };

  buttonLabelStyles = {
    fontSize: '11px',
  };

  render() {
    return (
      <Fragment>
        <FormLabel>Amount</FormLabel>

        <Input
          type="number"
          containerStyle={this.inputAmount}
          value={this.props.amount}
          onChange={this.onChangeAmount}
        />

        <Button
          style={this.buttonStyles}
          labelStyle={this.buttonLabelStyles}
          primary
          label="MAX"
          onClick={this.onClickMax}
        />
      </Fragment>
    );
  }
}

export default GasLimitField;
