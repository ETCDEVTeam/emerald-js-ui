import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import CssBaseline from '@material-ui/core/CssBaseline';

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
  addDecorator((story) => (<EmeraldProvider>{story()}</EmeraldProvider>))
  addDecorator(withCssBaseline);
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
