import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button, Typography, Divider } from '@material-ui/core';
import { EmeraldProvider } from '../../src/providers/EmeraldProvider';
import { HttpTransportContext } from '../../src/providers/HttpTransportProvider';

storiesOf('EmeraldProvider', module)
  .add('default', () => (
    <EmeraldProvider>
      <Typography>Theme applied</Typography>

      <HttpTransportContext.Consumer>
        {({ httpTransport, changeUrl }) => {
           return (
             <div style={{ width: '300px', height: '300px' }}>
               <Typography>HttpTransportProvider Settings</Typography>

               <Divider />

               <Typography>{JSON.stringify(httpTransport)}</Typography>

               <Divider />

               <Button onClick={() => changeUrl('localhost:8545')}>Change to localhost</Button>
             </div>
           );
        }}
      </HttpTransportContext.Consumer>
    </EmeraldProvider>
  ));
