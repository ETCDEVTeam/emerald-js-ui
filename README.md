# Emerald UI
[![Build Status](https://travis-ci.org/ETCDEVTeam/emerald-js-ui.svg?branch=master)](https://travis-ci.org/ETCDEVTeam/emerald-js-ui)
[![codecov](https://codecov.io/gh/ETCDEVTeam/emerald-js-ui/branch/master/graph/badge.svg)](https://codecov.io/gh/ETCDEVTeam/emerald-js-ui)

[![Join the chat at https://gitter.im/ethereumproject/emerald-js](https://badges.gitter.im/ethereumproject/emerald-js.svg)](https://gitter.im/ethereumproject/emerald-js?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


React components

## How to run
`npm install`

`npm run storybook`

## How to use

#### Install emerald-js-ui package

`npm install https://github.com/ETCDEVTeam/emerald-js-ui.git#v0.0.10`

or

`yarn add https://github.com/ETCDEVTeam/emerald-js-ui.git#v0.0.10`

#### Install material-ui

`npm install material-ui`

or

`yarn add material-ui`

#### Configure MUI Theme
Somewhere in `index.js`
```js
...
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import theme from 'emerald-js-ui/src/theme.json';
...

const muiTheme = getMuiTheme(theme);

const App = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Main />
    </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('app'));
```

#### Using icons
```js

import { Block as BlockIcon } from 'emerald-js-ui/lib/icons2';


```
## Contact
Chat with us via [Gitter](https://gitter.im/ethereumproject/emerald-wallet)