import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';
import theme from '../../src/theme.json';

import FlatButton from 'material-ui/FlatButton';
import Button from '../../src/components/Button';

const styles = {
  padding: '5px 10px 5px 10px',
}

storiesOf('Buttons', module)
  .addDecorator(muiTheme([theme, 'Light Theme', 'Dark Theme']))
  .add('all', () => {
    return (
      <div style={{paddingTop: '10px'}}>
        <div style={styles}>
          <Button primary label="Disabled" disabled/>
        </div>
        <div style={styles}>
          <Button primary label="Generate New Wallet"/>
        </div>
        <div style={styles}>
          <Button label="SEND"/>
        </div>
        <div style={styles}>
          <FlatButton primary label="FROM KEYSTORE FILE"/> <FlatButton label="FORGOT?"/>
        </div>
      </div>
    )
  })
