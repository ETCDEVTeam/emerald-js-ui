import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Address from '../../src/components/Address';

storiesOf('Address', module)
  .add('default', () => (<MuiThemeProvider><Address id="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98" /></MuiThemeProvider>))
  .add('shortened', () => (<MuiThemeProvider><Address shortened id="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98" /></MuiThemeProvider>));
