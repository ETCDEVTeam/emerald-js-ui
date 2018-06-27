import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Input from '../../src/components/Input';
import ArrowDown from '../../src/icons3/ArrowDown';

import { createMuiTheme } from '@material-ui/core/styles';
import { muiTheme } from 'storybook-addon-material-ui';

const theme = createMuiTheme({
  overrides: {
    MuiFormControl: {
      root: {
        border: `1px solid ${this.palette.divider}`,
      }
    }
  },
  props: {
    MuiInput: {
      disableUnderline: true,
    }
  }
});

storiesOf('Input', module)
  .addDecorator(muiTheme(theme))
  .add('all', () => (
    <div style={{ width: '300px', border: '1px solid yellow' }}>
      <div>
        <h1>Plain Jane</h1>
        <Input value="value text" onChange={action('onChange')} />
      </div>
      <div>
        <h1>With label</h1>
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
    </div>
  ));
