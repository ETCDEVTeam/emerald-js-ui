import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import FormLabel from '../FormLabel.js';
import Input from '../../Input';
import Button from '../../Button';

class AmountField extends React.Component {
  static propTypes = {
    onChangeAmount: PropTypes.func.isRequired,
    amount: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired,
    onMaxClicked: PropTypes.func.isRequired,
  }

  constructor() {
    super();
    this.onChangeAmount = this.onChangeAmount.bind(this);
    this.state = { errorText: null };
  }

  onChangeAmount(event, amount) {
    this.props.onChangeAmount(amount);

    if (!amount && amount !== 0) {
      this.setState({ errorText: 'Required' });
    } else {
      this.setState({ errorText: null });
    }
  }

  inputStyles = {
    width: '200px',
    marginRight: '10px',
  }

  buttonStyles = {
    height: '30px',
    minWidth: '35px',
    lineHeight: '30px',
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
          containerStyle={this.inputStyles}
          min="0"
          max={this.props.balance}
          value={this.props.amount}
          onChange={this.onChangeAmount}
          errorText={this.state.errorText}
        />

        <Button
          style={this.buttonStyles}
          labelStyle={this.buttonLabelStyles}
          primary
          label="MAX"
          onClick={this.props.onMaxClicked}
        />
      </Fragment>
    );
  }
}

export default AmountField;
