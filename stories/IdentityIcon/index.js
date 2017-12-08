
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import IdentityIcon from '../../src/components/IdentityIcon';

storiesOf('IdentityIcon', module)
  .add('default', () => (<IdentityIcon id="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98" />))
  .add('expanded', () => (<IdentityIcon id="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98" expanded />))
  .add('with onClick handler', () => (<IdentityIcon id="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98" onClick={action('icon-click')} />));
