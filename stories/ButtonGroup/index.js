import React from 'react';
import { storiesOf } from '@storybook/react';
import FlatButton from 'material-ui/FlatButton';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';
import theme from '../../src/theme.json';
import Button from '../../src/components/Button';
import ButtonGroup from '../../src/components/ButtonGroup';


storiesOf('ButtonGroup', module)
  .addDecorator(muiTheme([theme, 'Light Theme', 'Dark Theme']))
  .add('all', () => (
    <ButtonGroup>
      <Button primary label="Disabled" disabled />
      <Button primary label="Generate New Wallet" />
      <Button label="SEND" />
    </ButtonGroup>
  ));
