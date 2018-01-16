import React from 'react';
import { storiesOf } from '@storybook/react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {
  Add,
  Copy,
  Close,
  Check,
  Delete,
  Edit,
  Eye,
  Gear,
  Ledger,
  QrCode,
  Repeat,
  Search,
  Logo,
  ArrowLeft,
  ArrowRight,
} from '../../src/icons';

storiesOf('icons', module)
  .addDecorator(story => (
    <MuiThemeProvider>
      {story()}
    </MuiThemeProvider>
  ))
  .add('Logo', () => (
    <div>
      <Logo />
      <Logo width="100px" height="100px" />
      <Logo width="200px" height="200px" />
    </div>))
  .add('All', () => (<div>
    <Add />
    <Close />
    <Check />
    <Delete />
    <Edit />
    <Eye />
    <Gear />
    <Ledger />
    <QrCode />
    <Repeat />
    <Search />
    <Copy />
    <ArrowLeft />
    <ArrowRight />
  </div>))
  .add('Add', () => (<Add />))
  .add('Close', () => (<Close />))
  .add('Check', () => (<Check />))
  .add('Delete', () => (<Delete />))
  .add('Edit', () => (<Edit />))
  .add('Eye', () => (<Eye />))
  .add('Gear', () => (<Gear />))
  .add('Ledger', () => (<Ledger />))
  .add('QrCode', () => (<QrCode />))
  .add('Repeat', () => (<Repeat />))
  .add('Search', () => (<Search />))
  .add('Copy', () => (<Copy />))
  .add('ArrowLeft', () => (<ArrowLeft />))
  .add('ArrowRight', () => (<ArrowRight />));
