import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { muiTheme } from 'storybook-addon-material-ui';
import theme from '../../src/theme.json';
import Card from '../../src/components/Card';

storiesOf('Card', module)
  .addDecorator(muiTheme([theme, 'Light Theme', 'Dark Theme']))
  .add('default', () => (<Card>Card content</Card>));
