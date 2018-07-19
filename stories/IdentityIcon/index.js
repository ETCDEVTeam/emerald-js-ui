
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import IdentityIcon from '../../src/components/IdentityIcon';

const addr = '0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98';
storiesOf('IdentityIcon', module)
  .add('default', () => (
    <div>
      <IdentityIcon id={addr.toLowerCase()} />
    </div>))
  .add('with onClick handler', () => (<IdentityIcon id="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98" onClick={action('icon-click')} />));
