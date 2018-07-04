import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme as storyBookMuiTheme } from 'storybook-addon-material-ui';
import ToggledIconButton from '../../src/components/ToggledIconButton';

import muiTheme from '../../src/theme/index';
import { Copytoclipboard as CloneIcon, Check1 as CheckCircle } from '../../src/icons3';

storiesOf('ToggledIconButton', module)
  .addDecorator(storyBookMuiTheme(muiTheme))
  .add('default', () => (
    <ToggledIconButton
      onClick={action('onClick')}
      icon={<CloneIcon />}
      toggledIcon={<CheckCircle />}
    />
  ));
