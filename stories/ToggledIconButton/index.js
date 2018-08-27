import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ToggledIconButton from '../../src/components/ToggledIconButton';

import { Copytoclipboard as CloneIcon, Check1 as CheckCircle } from '../../src/icons3';

storiesOf('ToggledIconButton', module)
  .add('default', () => (
    <ToggledIconButton
      onClick={action('onClick')}
      icon={<CloneIcon />}
      toggledIcon={<CheckCircle />}
    />
  ));
