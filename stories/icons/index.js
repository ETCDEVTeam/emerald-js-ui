import React from 'react';
import { storiesOf } from '@storybook/react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {
  Add,
  Copy,
  Close,
  Delete,
  Edit,
  Eye,
  Gear,
  Ledger,
  QrCode,
  Repeat,
  Search,
} from '../../src/icons';

storiesOf('icons', module)
  .add('Add', () => (<MuiThemeProvider><Add /></MuiThemeProvider>))
  .add('Close', () => (<MuiThemeProvider><Close /></MuiThemeProvider>))
  .add('Delete', () => (<MuiThemeProvider><Delete /></MuiThemeProvider>))
  .add('Edit', () => (<MuiThemeProvider><Edit /></MuiThemeProvider>))
  .add('Eye', () => (<MuiThemeProvider><Eye /></MuiThemeProvider>))
  .add('Gear', () => (<MuiThemeProvider><Gear /></MuiThemeProvider>))
  .add('Ledger', () => (<MuiThemeProvider><Ledger /></MuiThemeProvider>))
  .add('QrCode', () => (<MuiThemeProvider><QrCode /></MuiThemeProvider>))
  .add('Repeat', () => (<MuiThemeProvider><Repeat /></MuiThemeProvider>))
  .add('Search', () => (<MuiThemeProvider><Search /></MuiThemeProvider>))
  .add('Copy', () => (<MuiThemeProvider><Copy /></MuiThemeProvider>));
