import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Button from '@material-ui/core/Button';


storiesOf('Buttons', module)
  .add('Default', () => (
    <Fragment>
      <div>
        <h1>Primary Colors</h1>
        <Button>Button</Button>
        <Button disabled>Disabled Button</Button>
      </div>
      <div>
        <h1>Secondary Colors</h1>
        <Button color="secondary">Button</Button>
        <Button color="secondary" disabled>Disabled Button</Button>
      </div>
    </Fragment>
  ))

  .add('Contained', () => (
    <Fragment>
      <div>
        <h1>Primary Colors</h1>
        <Button variant="contained">Button</Button>
        <Button variant="contained" disabled>Disabled Button</Button>
      </div>
      <div>
        <h1>Secondary Colors</h1>
        <Button variant="contained" color="secondary">Button</Button>
        <Button variant="contained" color="secondary" disabled>Disabled Button</Button>
      </div>
    </Fragment>
  ));

