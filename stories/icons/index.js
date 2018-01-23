import React from 'react';
import { storiesOf } from '@storybook/react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';

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
  .add('All-48x48', () => (<div>
    <IconButton iconStyle={{ width: '48px', height: '48px' }}><Add /></IconButton>
    <IconButton iconStyle={{ width: '48px', height: '48px' }}><Close /></IconButton>
    <IconButton iconStyle={{ width: '48px', height: '48px' }}><Check /></IconButton>
    <IconButton iconStyle={{ width: '48px', height: '48px' }}><Delete /></IconButton>
    <IconButton iconStyle={{ width: '48px', height: '48px' }}><Edit /></IconButton>
    <IconButton iconStyle={{ width: '48px', height: '48px' }}><Eye /></IconButton>
    <IconButton iconStyle={{ width: '48px', height: '48px' }}><Gear /></IconButton>
    <IconButton iconStyle={{ width: '48px', height: '48px' }}><Ledger /></IconButton>
    <IconButton iconStyle={{ width: '48px', height: '48px' }}><QrCode /></IconButton>
    <IconButton iconStyle={{ width: '48px', height: '48px' }}><Repeat /></IconButton>
    <IconButton iconStyle={{ width: '48px', height: '48px' }}><Search /></IconButton>
    <IconButton iconStyle={{ width: '48px', height: '48px' }}><Copy /></IconButton>
    <IconButton iconStyle={{ width: '48px', height: '48px' }}><ArrowLeft /></IconButton>
    <IconButton iconStyle={{ width: '48px', height: '48px' }}><ArrowRight /></IconButton>
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
