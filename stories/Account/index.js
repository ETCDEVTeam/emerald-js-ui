import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Account from '../../src/components/Account';

storiesOf('Account', module)
  .addDecorator(story => (
    <MuiThemeProvider>
      {story()}
    </MuiThemeProvider>
  ))
  .add('default', () => (
    <Account
      addr="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98"
      name="account1"
      onAddressClick={action('address-click')}
    />))
  .add('editable', () => (
    <Account
      addr="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98"
      name="account1"
      editable
      onAddressClick={action('address-click')}
    />))
  .add('without Name', () => (
    <Account
      addr="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98"
      onAddressClick={action('address-click')}
    />));
