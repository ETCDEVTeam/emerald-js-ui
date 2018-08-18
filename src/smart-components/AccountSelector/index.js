import React from 'react';
import { EmeraldContext } from '../../providers/EmeraldProvider';
import AccountSelect from '../../components/AccountSelect';

export default class AccountSelector extends React.Component {
  render() {
    return (
      <EmeraldContext.Consumer>
      {({account, accounts, changeAccount}) => {
        console.log('account =', account, 'accounts', accounts)
        return (
          <AccountSelect
            accounts={accounts}
            selectedIndex={accounts.indexOf(account)}
            onChange={(index) => {changeAccount(accounts[index])}}/>
        )
      }}
      </EmeraldContext.Consumer>
    )
  }
}