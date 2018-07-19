import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme as storyBookMuiTheme } from 'storybook-addon-material-ui';
import Address from '../../src/components/Address';

import muiTheme from '../../src/theme/index';

storiesOf('Address', module)
  .addDecorator(storyBookMuiTheme(muiTheme))
  .add('default', () => (
    <Address
      onClick={action('onClick')}
      onCopyClick={action('onCopyclick')}
      id="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98"
    />
  ))
  .add('Auto fit container', () => (
    <div style={{ width: '200px' }}>
      <Address
        shortened={true}
        onClick={action('onClick')}
        onCopyClick={action('onCopyclick')}
        id="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98"
      />
    </div>
  ));
