import React from 'react';
import PropTypes from 'prop-types'
import muiThemeable from 'material-ui/styles/muiThemeable';
import FormFieldWrapper from './FormFieldWrapper';
import FromField from './FromField';
import TokenField from './TokenField';
import ToField from './ToField';

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
    from: PropTypes.string.isRequired,
    onChangeToken: PropTypes.func.isRequired,
    token: PropTypes.string.isRequired,
    tokenSymbols: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired,
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
      </div>
    );
  }
}


export default muiThemeable()(CreateTransaction);
