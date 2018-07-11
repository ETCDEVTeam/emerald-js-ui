import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Account from '../../src/components/Account';
import { muiTheme } from 'storybook-addon-material-ui';
import theme from '../../src/theme.json';

storiesOf('Account', module)
  .addDecorator(muiTheme([theme, 'Light Theme', 'Dark Theme']))
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
    />))
  .add('Identity Icon', () => (
    <Account
      addr="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98"
      identity
    />))
  .add('Identity Icon with name', () => (
    <Account
      addr="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98"
      name="account1"
      identity
    />))
  .add('Identity Icon with editable name', () => (
    <Account
      addr="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98"
      editable
      name="account1"
      identity
    />))
  .add('Identity Icon with custom size indentity props', () => (
    <Account
      addr="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98"
      identity
      identityProps={{ size: 30 }}
    />));
