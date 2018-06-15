import React from 'react';
import PropTypes from 'prop-types'
import muiThemeable from 'material-ui/styles/muiThemeable';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';
import FormFieldWrapper from './FormFieldWrapper';
import FromField from './FromField';
import FormLabel from './FormLabel';
import TokenField from './TokenField';
import ToField from './ToField';
import AmountField from './AmountField';
import GasLimitField from './GasLimitField'

function getStyles(muiTheme) {
  return {
    margin: '50px',
    padding: '30px',
    width: '800px',
    background: '#fff',
    border: `1px solid ${muiTheme.palette.borderColor}`,
  };
}

class CreateTransaction extends React.Component {
  static propTypes = {
    ownAddresses: PropTypes.arrayOf(PropTypes.string).isRequired,
    onChangeFrom: PropTypes.func.isRequired,
    onChangeGasLimit: PropTypes.func.isRequired,
    from: PropTypes.string.isRequired,
    onChangeToken: PropTypes.func.isRequired,
    token: PropTypes.string.isRequired,
    tokenSymbols: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    onChangeAmount: PropTypes.func.isRequired,
    addressBookAddresses: PropTypes.arrayOf(PropTypes.string).isRequired,
    onChangeTo: PropTypes.func.isRequired,
    to: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    fiatBalance: PropTypes.string.isRequired,
    muiTheme: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div style={getStyles(this.props.muiTheme)}>
        <FormFieldWrapper>
          <FromField
            onChangeAccount={this.props.onChangeFrom}
            selectedAccount={this.props.from}
            accounts={this.props.ownAddresses}
          />
        </FormFieldWrapper>

        <FormFieldWrapper>
          <TokenField
            onChangeToken={this.props.onChangeToken}
            selectedToken={this.props.token}
            tokenSymbols={this.props.tokenSymbols}
            balance={this.props.balance}
            currency={this.props.currency}
            fiatBalance={this.props.fiatBalance}
          />
        </FormFieldWrapper>

        <FormFieldWrapper>
          <ToField
            onChangeTo={this.props.onChangeTo}
            to={this.props.to}
            addressBookAddresses={this.props.addressBookAddresses}
          />
        </FormFieldWrapper>

        <FormFieldWrapper>
          <AmountField
            balance={this.props.balance}
            amount={this.props.amount}
            onChangeAmount={this.props.onChangeAmount}
          />
        </FormFieldWrapper>

        <FormFieldWrapper>
          <GasLimitField
            onChangeGasLimit={this.props.onChangeGasLimit}
            gasLimit={this.props.gasLimit}
            txFee={this.props.txFee}
            token={this.props.token}
            txFeeFiat={this.props.txFeeFiat}
            currency={this.props.currency}
          />
        </FormFieldWrapper>

        <FormFieldWrapper>
         <FormLabel />
          <ButtonGroup style={{flexGrow: 5}}>
            <Button label="Back" />
            <Button disabled={!this.props.to || !this.props.from} primary label="Create Transaction" />
          </ButtonGroup>
        </FormFieldWrapper>
      </div>
    );
  }
}


export default muiThemeable()(CreateTransaction);
