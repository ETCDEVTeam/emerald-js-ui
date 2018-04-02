import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';
import theme from '../../src/theme.json';
import muiThemeable from 'material-ui/styles/muiThemeable';

import IdentityIcon from '../../src/components/IdentityIcon';

const ColorsComponent = muiThemeable()(({muiTheme, ...props}) => {
    return (
        <div>
            <div style={{ backgroundColor: muiTheme.palette.primary1Color }}>
                primary1Color
            </div>
            <div style={{ backgroundColor: muiTheme.palette.primary2Color }}>
                primary2Color
            </div>
            <div style={{ backgroundColor: muiTheme.palette.primary3Color }}>
                primary3Color
            </div>
        </div>
    )
});

storiesOf('Colors', module)
  .addDecorator(muiTheme([theme, 'Light Theme', 'Dark Theme']))
  .add('all', () => (
      <ColorsComponent />
  ));

