import React from 'react';
import { storiesOf } from '@storybook/react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';

import {
  Block,
  Settings,
  Add,
  ArrowDown,
  Back,
  Burger,
  CheckCircle,
  Check,
  Cli,
  Close,
  Contract,
  ContractAbi,
  ContractExecute1,
  ContractExecute2,
  ContractExecute3,
  Copy,
  Dashboard,
  Download,

} from '../../src/icons2';

storiesOf('icons2', module)
  .addDecorator(story => (
    <MuiThemeProvider>
      {story()}
    </MuiThemeProvider>
  ))

  .add('All', () => (<div>
    <Block />
    <Settings />
    <Add />
    <ArrowDown />
    <Back />
    <Burger />
    <CheckCircle />
    <Check />
    <Cli />
    <Close />
    <Contract />
    <ContractAbi />
    <ContractExecute1 />
    <ContractExecute2 />
    <ContractExecute3 />
    <Copy />
    <Dashboard />
    <Download />
  </div>))
  .add('All-48x48', () => (<div>
    <IconButton iconStyle={{ width: '48px', height: '48px' }}><Block /></IconButton>
    <IconButton iconStyle={{ width: '48px', height: '48px' }}><Settings /></IconButton>
    <IconButton iconStyle={{ width: '48px', height: '48px' }}><Add /></IconButton>
    <IconButton iconStyle={{ width: '48px', height: '48px' }}><ArrowDown /></IconButton>
    <IconButton iconStyle={{ width: '48px', height: '48px' }}><Back /></IconButton>
    <IconButton iconStyle={{ width: '48px', height: '48px' }}><Burger /></IconButton>
    <IconButton iconStyle={{ width: '48px', height: '48px' }}><CheckCircle /></IconButton>
    <IconButton iconStyle={{ width: '48px', height: '48px' }}><Check /></IconButton>
    <IconButton iconStyle={{ width: '48px', height: '48px' }}><Cli /></IconButton>
    <IconButton iconStyle={{ width: '48px', height: '48px' }}><Close /></IconButton>
    <IconButton iconStyle={{ width: '48px', height: '48px' }}><Contract /></IconButton>
    <IconButton iconStyle={{ width: '48px', height: '48px' }}><ContractAbi /></IconButton>
    <IconButton iconStyle={{ width: '48px', height: '48px' }}><ContractExecute1 /></IconButton>
    <IconButton iconStyle={{ width: '48px', height: '48px' }}><ContractExecute2 /></IconButton>
    <IconButton iconStyle={{ width: '48px', height: '48px' }}><ContractExecute3 /></IconButton>
    <IconButton iconStyle={{ width: '48px', height: '48px' }}><Copy /></IconButton>
    <IconButton iconStyle={{ width: '48px', height: '48px' }}><Dashboard /></IconButton>
    <IconButton iconStyle={{ width: '48px', height: '48px' }}><Download /></IconButton>
  </div>));
