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
  </div>))
  .add('All-48x48', () => (<div>
    <IconButton iconStyle={{ width: '48px', height: '48px' }}><Block /></IconButton>
    <IconButton iconStyle={{ width: '48px', height: '48px' }}><Settings /></IconButton>
    <IconButton iconStyle={{ width: '48px', height: '48px' }}><Add /></IconButton>
    <IconButton iconStyle={{ width: '48px', height: '48px' }}><ArrowDown /></IconButton>
    <IconButton iconStyle={{ width: '48px', height: '48px' }}><Back /></IconButton>

                           </div>));
