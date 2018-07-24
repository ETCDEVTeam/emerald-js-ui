import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { muiTheme as storyBookMuiTheme } from 'storybook-addon-material-ui';
import CssBaseline from '@material-ui/core/CssBaseline';
import muiTheme from '../src/theme/index';

const withCssBaseline = (story) => {
  return (
    <React.Fragment>
      <CssBaseline />
      {story()}
    </React.Fragment>
  )
}
const req = require.context('../stories/', true, /\.js$/)

function loadStories() {
  addDecorator(storyBookMuiTheme(muiTheme))
  addDecorator(withCssBaseline);
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
