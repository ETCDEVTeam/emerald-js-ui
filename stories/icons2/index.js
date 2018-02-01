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
  Exit,
  Export,
  File,
  FullScreen,
  HardwareWallet,
  Home,
  Import,
  Method1,
  Method2,
  Method3,
  Method4,
  MultiSigWallet,
  Network,
  NetworkOk,
  NetworkDisconnected,
  Play,
  Print,
  QrCode,
  Remove,
  Search,
  Spinner1,
  Spinner2,
  Time,
  Token1,
  Token2,
  Token3,
  Address,
  Windowed,
} from '../../src/icons2';

import {
  EthereumClassic,
  Bitcoin,
  Ethereum,
    Litecoin,
    Monero,
    Zcash,
} from '../../src/icons2/currencies';

storiesOf('icons2', module)
  .addDecorator(story => (
    <MuiThemeProvider>
      {story()}
    </MuiThemeProvider>
  ))

  .add('All', () => (<div>
    <div>
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
      <Exit />
      <Export />
      <File />
      <FullScreen />
      <HardwareWallet />
      <Home />
      <Import />
      <Method1 />
      <Method2 />
      <Method3 />
    </div>
    <div>
      <Method4 />
      <MultiSigWallet />
      <Network />
      <NetworkDisconnected />
      <NetworkOk />
      <Play />
      <Print />
      <QrCode />
      <Remove />
      <Search />
      <Spinner1 />
      <Spinner2 />
      <Time />
      <Token1 />
      <Token2 />
      <Token3 />
      <Address />
      <Windowed />
    </div>

  </div>))
  .add('All-48x48', () => (<div>
    <div>
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
      <IconButton iconStyle={{ width: '48px', height: '48px' }}><Exit /></IconButton>
      <IconButton iconStyle={{ width: '48px', height: '48px' }}><Export /></IconButton>
      <IconButton iconStyle={{ width: '48px', height: '48px' }}><File /></IconButton>
      <IconButton iconStyle={{ width: '48px', height: '48px' }}><FullScreen /></IconButton>
      <IconButton iconStyle={{ width: '48px', height: '48px' }}><HardwareWallet /></IconButton>
      <IconButton iconStyle={{ width: '48px', height: '48px' }}><Home /></IconButton>
      <IconButton iconStyle={{ width: '48px', height: '48px' }}><Import /></IconButton>
      <IconButton iconStyle={{ width: '48px', height: '48px' }}><Method1 /></IconButton>
      <IconButton iconStyle={{ width: '48px', height: '48px' }}><Method2 /></IconButton>
      <IconButton iconStyle={{ width: '48px', height: '48px' }}><Method3 /></IconButton>
    </div>
    <div>
      <IconButton iconStyle={{ width: '48px', height: '48px' }}><Method4 /></IconButton>
      <IconButton iconStyle={{ width: '48px', height: '48px' }}><MultiSigWallet /></IconButton>
      <IconButton iconStyle={{ width: '48px', height: '48px' }}><Network /></IconButton>
      <IconButton iconStyle={{ width: '48px', height: '48px' }}><NetworkDisconnected /></IconButton>
      <IconButton iconStyle={{ width: '48px', height: '48px' }}><NetworkOk /></IconButton>
      <IconButton iconStyle={{ width: '48px', height: '48px' }}><Play /></IconButton>
      <IconButton iconStyle={{ width: '48px', height: '48px' }}><Print /></IconButton>
      <IconButton iconStyle={{ width: '48px', height: '48px' }}><QrCode /></IconButton>
      <IconButton iconStyle={{ width: '48px', height: '48px' }}><Remove /></IconButton>
      <IconButton iconStyle={{ width: '48px', height: '48px' }}><Search /></IconButton>
      <IconButton iconStyle={{ width: '48px', height: '48px' }}><Spinner1 /></IconButton>
      <IconButton iconStyle={{ width: '48px', height: '48px' }}><Spinner2 /></IconButton>
      <IconButton iconStyle={{ width: '48px', height: '48px' }}><Time /></IconButton>
      <IconButton iconStyle={{ width: '48px', height: '48px' }}><Token1 /></IconButton>
      <IconButton iconStyle={{ width: '48px', height: '48px' }}><Token2 /></IconButton>
      <IconButton iconStyle={{ width: '48px', height: '48px' }}><Token3 /></IconButton>
      <IconButton iconStyle={{ width: '48px', height: '48px' }}><Address /></IconButton>
      <IconButton iconStyle={{ width: '48px', height: '48px' }}><Windowed /></IconButton>
    </div>
  </div>))
  .add('Currencies', () => (
    <div>
      <EthereumClassic />
      <Bitcoin />
      <Ethereum />
      <Litecoin />
      <Monero />
      <Zcash />
    </div>
  ));
