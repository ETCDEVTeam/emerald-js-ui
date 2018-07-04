import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from '../../src/components/Page';
import { muiTheme } from 'storybook-addon-material-ui';
import Back from '../../src/icons3/Back';

storiesOf('Page', module)
  .add('default', () => (
    <div>
      <Page title="foo bar" leftIcon={<Back />}>
        Im a page content supsup
      </Page>
    </div>
  ));
