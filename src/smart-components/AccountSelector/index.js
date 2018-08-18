import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Block as BlockIcon } from '../../icons3';
import VaultRpc from '../../providers/VaultRpc';
import AccountSelect from '../../components/AccountSelect';

export default class AccountSelector extends React.Component {
  render() {
    return (
      <VaultRpc method="listAccounts">
      {accounts => {
        return (
          <React.Fragment>
            <AccountSelect accounts={accounts.map((a) => a.address)}/>
          </React.Fragment>
        )
      }}
      </VaultRpc>
    )
  }
}