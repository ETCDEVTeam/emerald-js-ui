import React from 'react';
import { storiesOf } from '@storybook/react';
import FlatButton from 'material-ui/FlatButton';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';
import theme from '../../src/theme.json';
import LinkButton from '../../src/components/LinkButton';

const styles = {
  padding: '5px 10px 5px 10px',
};

storiesOf('LinkButton', module)
  .addDecorator(muiTheme([theme, 'Light Theme', 'Dark Theme']))
  .add('default', () => (
    <div style={{ paddingTop: '10px' }}>
      <div style={styles}>
        <LinkButton label="Link Button" />
      </div>
      <div style={styles}>
        <LinkButton href="https://gastracker.io" targe="_blank" label="With Href" />
      </div>
      <div style={styles}>
        <LinkButton style={{ color: '#FF0000' }} label="Red Color" />
      </div>
    </div>
  ));
