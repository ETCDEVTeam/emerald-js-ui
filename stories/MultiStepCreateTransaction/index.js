import React from 'react';
import { storiesOf } from '@storybook/react';
import FlatButton from 'material-ui/FlatButton';
import { TextField } from 'material-ui';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text, boolean, number, array, object } from '@storybook/addon-knobs/react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Button from '../../src/components/Button';

import theme from '../../src/theme.json';
import Input from '../../src/components/Input';
import SelectAddressInput from '../../src/components/SelectAddressInput';
import SelectField from '../../src/components/SelectField';
import { Book } from '../../src/icons3';
import { MenuItem } from 'material-ui';


function getStyles(muiTheme) {
  return {
    balance: {
      fontFamily: muiTheme.fontFamily,
      color: muiTheme.palette.secondaryTextColor,
      wordSpacing: '8px',
      letterSpacing: '1px',
      fontWeight: '200',
      paddingLeft: '20px'
    },
    label: {
      flexShrink: 1,
      width: '120px',
      textAlign: 'right',
      paddingRight: '20px',
      fontSize: '16px',
      fontFamily: muiTheme.fontFamily
    },
    input: {
      flexGrow: 5,
    },
    inputAmount: {
      width: '200px',
      marginRight: '10px'
    },
    button: {
      fontSize: '11px',
      height: '35px',
      width: '40px'
    },
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      paddingBottom: '20px'
    }
  }
}

class CreateTransaction extends React.Component {
  constructor() {
    super()
    this.state = {};
  }
  onChangeFrom(list, index) {
    this.setState({
      from: list[index]
    });
    action('onChangeFrom')(list, index);
  }

  onChangeTo(list, index) {
    this.setState({
      to: list[index]
    });
    action('onChangeTo')(list, index);
  }

  onChangeToken(event, value) {
    this.setState({
      token: this.props.tokenSymbols[value]
    });
    action('onChangeToken')(this.props.tokenSymbols[value]);
  }
  componentDidMount() {
    this.setState({
      token: this.props.tokenSymbols[0]
    });
  }

  render() {
    const styles = getStyles(this.props.muiTheme);
    return (
      <div style={{ padding: '10px', width: '800px', border: '1px solid black' }}>
        <div style={styles.wrapper}>
          <label style={styles.label}>From</label>
          <SelectAddressInput onChangeAccount={this.onChangeFrom.bind(this)} selectedAccount={this.state.from} accounts={this.props.ownAddresses} containerStyle={styles.input}/>
        </div>
        <div style={styles.wrapper}>
          <label style={styles.label}>To</label>
          <SelectAddressInput emptyAccountMenuItem={<MenuItem primaryText="Address book is empty. Click to add contact" onClick={action('onAddressBookCreate')}/>} iconButton={<Book />} onChangeAccount={this.onChangeTo.bind(this)} selectedAccount={this.state.to} accounts={this.props.addressBookAddresses} containerStyle={styles.input}/>
        </div>
        <div style={styles.wrapper}>
          <label style={styles.label}>Currency</label>
          <SelectField value={this.state.token} onChange={this.onChangeToken.bind(this)}>
            {this.props.tokenSymbols.map((toke) =>
              <MenuItem
                key={toke}
                value={toke}
                label={toke}
                primaryText={toke}
              />
            )}
          </SelectField>
          <div style={styles.balance}>{this.props.balance} {this.state.token}   /   {this.props.fiatBalance} {this.props.currency}</div>
        </div>
        <div style={styles.wrapper}>
          <label style={styles.label}>Amount</label>
          <Input containerStyle={styles.inputAmount} hintText="0" onChange={action('onChange')} />
          <Button labelStyle={styles.button} primary label="MAX" />
        </div>
        <div style={styles.wrapper}>
          <label style={styles.label}>Transaction Fee</label>
          <Input containerStyle={styles.input} hintText="0" onChange={action('onChange')} />
        </div>
      </div>
    )
  }
}


const ThemedCreateTransaction = muiThemeable()(CreateTransaction);

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
        ownAddresses={array('Own Account Addreses', mockOwnAddresses)}/>
  ));

