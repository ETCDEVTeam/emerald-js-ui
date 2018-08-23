import React from 'react';
import { storiesOf } from '@storybook/react';
import Typography from '@material-ui/core/Typography';

import Page from '../../src/components/Page';
import Back from '../../src/icons3/Back';

storiesOf('Page', module)
  .add('default', () => (
    <div>
      <Page title="foo bar" leftIcon={<Back />}>
        <Typography>Im a page content supsup</Typography>
      </Page>
    </div>
  ));
