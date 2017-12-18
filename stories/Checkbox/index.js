import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Checkbox from '../../src/components/Checkbox';

storiesOf('Checkbox', module)
  .addDecorator(story => (
    <MuiThemeProvider>
      {story()}
    </MuiThemeProvider>
  ))
  .add('default', () => (<Checkbox />))
  .add('default labeled', () => (<Checkbox label="Label Text" />))
  .add('checked labeled', () => (<Checkbox checked label="Checked labeled" />))
  .add('checked disabled', () => (<Checkbox checked disabled />))
  .add('with onCheck handler', () => (<Checkbox onCheck={action('check-click')} />))
  .add('disabled', () => (<Checkbox disabled />));
