import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import IconInput from '../../src/components/IconInput';
import { muiTheme } from 'storybook-addon-material-ui';
import theme from '../../src/theme.json';
import IdentityIcon from '../../src/components/IdentityIcon';

const id = '0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98';

storiesOf('IconInput', module)
  .addDecorator(muiTheme([theme, 'Light Theme', 'Dark Theme']))
  .add('default', () => (<IconInput defaultValue={id} icon={<IdentityIcon expanded={true} size={30} id={id} />}/>))
  .add('no icon', () => (<IconInput value={id} />));
