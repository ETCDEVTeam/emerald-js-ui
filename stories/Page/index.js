import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme as storyBookMuiTheme } from 'storybook-addon-material-ui';
import Typography from '@material-ui/core/Typography';
import { withKnobs, text, boolean, number, array, object } from '@storybook/addon-knobs/react';

import muiTheme from '../../src/theme/index';

import Page from '../../src/components/Page';
import Back from '../../src/icons3/Back';

storiesOf('Page', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <div>
      <Page title={text('title', 'Title Here')} leftIcon={<Back />}>
        <Typography>Im a page content supsup</Typography>
      </Page>
    </div>
  ));
