import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import FlatButton from 'material-ui/FlatButton';
import { TextField } from 'material-ui';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text, boolean, number, array, object } from '@storybook/addon-knobs/react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Button from '../../src/components/Button';
import ButtonGroup from '../../src/components/ButtonGroup';
import IdentityIcon from '../../src/components/IdentityIcon';
import theme from '../../src/theme.json';
import Input from '../../src/components/Input';
import SelectAddressInput from '../../src/components/SelectAddressInput';
import Account from '../../src/components/Account';
import SelectField from '../../src/components/SelectField';
import { Book } from '../../src/icons3';
import { MenuItem, IconMenu } from 'material-ui';
import CreateTransaction from '../../src/components/CreateTransaction';


function getStyles(muiTheme) {
  return {
    balance: {
      fontFamily: muiTheme.fontFamily,
      color: muiTheme.palette.secondaryTextColor,
      wordSpacing: '3px',
      letterSpacing: '1px',
      fontWeight: '200',
      paddingLeft: '20px'
    },
    label: {
      flexShrink: 1,
      width: '120px',
      textAlign: 'right',
      paddingRight: '30px',
      fontSize: '16px',
      fontWeight: '400',
      color: muiTheme.palette.textColor,
      fontFamily: muiTheme.fontFamily
    },
    input: {
      flexGrow: 5,
    },
    inputAmount: {
      width: '200px',
      marginRight: '10px'
    },
    buttonLabel: {
      fontSize: '11px',
    },
    button: {
      height: '30px',
      minWidth: '35px',
      lineHeight: '30px'
    },
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 0,
      paddingBottom: '20px'
    }
  }
}

class MenuItemForAddress extends React.Component {
  static muiName = 'MenuItem'

  constructor(...props) {
    super(...props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onChange(this.props.address);
  }

  render() {
    return (
      <MenuItem
        onClick={this.onClick}
        style={{paddingBottom: '5px', paddingTop: '5px', minHeight: 'auto', height: 'auto' }}
        primaryText={
          <Account identityProps={{size: 30}} addr={this.props.address} identity={true} hideCopy={true} />
        }
      />
    );
  }
}

class AddressIconMenu extends React.Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onRequestChange = this.onRequestChange.bind(this);
    this.state = {};
  }

  onChange(address) {
    this.setMenuOpen(false);
    this.props.onChange(address);
  }

  onRequestChange(status) {
    this.setMenuOpen(status);
  }

  onClick(address) {
    this.setState({ menuOpen: true });
  }

  setMenuOpen(status) {
    this.setState({ menuOpen: status });
  }

  render() {
    return (
      <IconMenu
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      iconButtonElement={<Book />}
      open={this.state.menuOpen}
      onClick={this.onClick}
      useLayerForClickAway={false}
      onRequestChange={this.onRequestChange}
      >
      {
        this.props.addressBookAddresses.map(
          (address) => (<MenuItemForAddress address={address} onChange={this.onChange} />)
        )
      }
      </IconMenu>
    );
  }
}


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
    this.onClickMax = this.onClickMax.bind(this);
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

  onChangeGasLimit(event, value) {
    this.setState({ txFee: value });
  }

  onClickMax(event, amount) {
    this.onChangeAmount(event, this.props.balance);
  }

  onChangeAmount(event, amount) {
    this.setState({amount});
  }

  componentDidMount() {
    this.setState({
      token: this.props.tokenSymbols[0],
    });
  }

  render() {
    const styles = getStyles(this.props.muiTheme);
    const wrapperStyle = {
      margin: '50px',
      padding: '30px',
      width: '800px',
      background: '#fff',
      border: `1px solid ${this.props.muiTheme.palette.borderColor}`,
    };

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
        fiatBalance={this.props.fiatBalance}
        onChangeTo={this.onChangeTo}
        to={this.state.to}
        addressBookAddresses={this.props.addressBookAddresses}
      />
    );
  }
}

/*
 *
 *         <div style={styles.wrapper}>
 *           <label style={styles.label}>Amount</label>
 *           <Input type="number" containerStyle={styles.inputAmount} value={this.state.amount} onChange={this.onChangeAmount} />
 *           <Button style={styles.button} labelStyle={styles.buttonLabel} primary label="MAX" onClick={this.onClickMax} />
 *         </div>
 *
 *         <div style={styles.wrapper}>
 *           <label style={styles.label}>Gas Limit</label>
 *           <Input type="number" containerStyle={{width: '300px'}} value={this.state.gasLimit} onChange={this.onChangeGasLimit} />
 *           <div style={{...styles.balance, fontSize: '14px'}}>{this.props.txFee} {this.state.token}   /   {this.props.txFeeFiat} {this.props.currency}</div>
 *         </div>
 *
 *         <div style={{paddingTop: '20px', ...styles.wrapper}}>
 *           <div className="spacer" style={styles.label}/>
 *           <ButtonGroup>
 *             <Button label="Back" />
 *             <Button primary label="Create Transaction" />
 *           </ButtonGroup>
 *         </div>
 *       </div>
 *     );
 *   }
 * } */


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

