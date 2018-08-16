import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import {EmeraldProvider} from '../src/providers/EmeraldProvider';

const req = require.context('../stories/', true, /\.js$/)

function loadStories() {
  addDecorator((story) => (<EmeraldProvider>{story()}</EmeraldProvider>))
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
