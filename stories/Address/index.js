import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Address from '../../src/components/Address';
import { muiTheme } from 'storybook-addon-material-ui';
import theme from '../../src/theme.json';

storiesOf('Address', module)
  .addDecorator(muiTheme([theme]))
  .add('default', () => (<Address onClick={action('onClick')} onCopyClick={action('onCopyclick')} id="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98" />))
  .add('without id', () => (<Address />))
  .add('shortened', () => (<Address shortened id="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98" onClick={action('onClick')} onCopyClick={action('onCopyclick')} />))
  .add('truncated with ellipses', () => (
    <div style={{ width: '200px', overflowX: 'hidden' }}>
      <Address onClick={action('onClick')} onCopyClick={action('onCopyclick')} id="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98" />
    </div>));
