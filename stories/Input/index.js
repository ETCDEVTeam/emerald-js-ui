import React from 'react';
import { storiesOf } from '@storybook/react';
import FlatButton from 'material-ui/FlatButton';
import { TextField } from 'material-ui';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';
import theme from '../../src/theme.json';
import Input from '../../src/components/Input';

const styles = {
  padding: '5px 10px 5px 10px',
};

storiesOf('Input', module)
  .addDecorator(muiTheme([theme, 'Light Theme', 'Dark Theme']))
  .add('all', () => (
    <div style={{ paddingTop: '10px' }}>
      <div style={styles}>
        <Input hintText="hint text" onChange={action('onChange')} />
      </div>
      <div style={styles}>
        <Input value="value text" onChange={action('onChange')} />
      </div>
    </div>
  ));
