import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Input from '../../src/components/Input';
import ArrowDown from '../../src/icons3/ArrowDown';

import { createMuiTheme } from '@material-ui/core/styles';
import { muiTheme as storyBookMuiTheme } from 'storybook-addon-material-ui';

import muiTheme from '../../src/theme/index';

storiesOf('Input', module)
  .addDecorator(storyBookMuiTheme(muiTheme))
  .add('all', () => (
    <div style={{ width: '300px', border: '1px solid yellow' }}>
      <div>
        <h1>Plain Jane</h1>
        <Input value="value text" onChange={action('onChange')} />
      </div>
      <div>
        <h1>With placeholder</h1>
        <Input placeholder="hint text" onChange={action('onChange')} />
      </div>
      <div>
        <h1>With Left Icon</h1>
        <Input leftIcon={<ArrowDown />} onChange={action('onChange')} />
      </div>
      <div>
        <h1>With Right Icon</h1>
        <Input rightIcon={<ArrowDown />} onChange={action('onChange')} />
      </div>
      <div>
        <h1>With Error</h1>
        <Input errorText="Big ol error" onChange={action('onChange')} />
      </div>
    </div>
  ));
