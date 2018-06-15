import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text, boolean, number, array, object } from '@storybook/addon-knobs/react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import theme from '../../src/theme.json';
import CreateTransaction from '../../src/components/CreateTransaction';

class _CreateTransaction extends React.Component {
  static propTypes = {
    currency: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired,
    fiatBalance: PropTypes.string.isRequired,
    tokenSymbols: PropTypes.arrayOf(PropTypes.string).isRequired,
    addressBookAddresses: PropTypes.arrayOf(PropTypes.string).isRequired,
    ownAddresses: PropTypes.arrayOf(PropTypes.string).isRequired,
    txFee: PropTypes.string.isRequired,
    txFeeFiat: PropTypes.string.isRequired,
  };

  constructor() {
    super();
    this.onChangeFrom = this.onChangeFrom.bind(this);
    this.onChangeTo = this.onChangeTo.bind(this);
    this.onChangeToken = this.onChangeToken.bind(this);
    this.onChangeGasLimit = this.onChangeGasLimit.bind(this);
    this.onChangeAmount = this.onChangeAmount.bind(this);
    this.state = { gasLimit: "21000", amount: '0' };
  }

  onChangeFrom(from) {
    this.setState({from});
    action('onChangeFrom')(from);
  }

  onChangeTo(to) {
    this.setState({ to });
    action('onChangeTo')(to);
  }

  onChangeToken(token) {
    this.setState({token});
    action('onChangeToken')(token);
  }

  onChangeGasLimit(value) {
    this.setState({ gasLimit: value || this.state.gasLimit });
  }

  onChangeAmount(amount) {
    this.setState({amount: amount || this.state.amount});
  }

  componentDidMount() {
    this.setState({
      token: this.props.tokenSymbols[0],
    });
  }

  render() {
    return (
      <CreateTransaction
        ownAddresses={this.props.ownAddresses}
        from={this.state.from}
        onChangeFrom={this.onChangeFrom}
        onChangeToken={this.onChangeToken}
        token={this.state.token}
        tokenSymbols={this.props.tokenSymbols}
        balance={this.props.balance}
        currency={this.props.currency}
        amount={this.state.amount}
        gasLimit={this.state.gasLimit}
        txFee={this.props.txFee}
        txFeeFiat={this.props.txFeeFiat}
        onChangeGasLimit={this.onChangeGasLimit}
        onChangeAmount={this.onChangeAmount}
        fiatBalance={this.props.fiatBalance}
        onChangeTo={this.onChangeTo}
        to={this.state.to}
        addressBookAddresses={this.props.addressBookAddresses}
      />
    );
  }
}

const ThemedCreateTransaction = muiThemeable()(_CreateTransaction);

const mockOwnAddresses = ['0x00', '0x03', '0x004'];
const mockAddressBookAddresses = ['0x00', '0x0111', '0x006'];

storiesOf('Create Transaction', module)
  .addDecorator(muiTheme([theme]))
  .addDecorator(withKnobs)
  .add('all', () => (
    <ThemedCreateTransaction
      currency={text('Currency', 'USD')}
      balance={text('Balance', '115.15515')}
      fiatBalance={text('Fiat Balance', '2815.55')}
      tokenSymbols={array('Token Symbols', ['ETC', 'BEC'])}
      addressBookAddresses={array('Address Book Addresses', mockAddressBookAddresses)}
      ownAddresses={array('Own Account Addreses', mockOwnAddresses)}
      txFee={text('TxFee', '0.0042')}
      txFeeFiat={text('TxFeeFiat', '1')}
    />
  ));

