import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '../../src/components/Card';

storiesOf('Card', module)
  .add('default', () => (<Card>Card content</Card>));
