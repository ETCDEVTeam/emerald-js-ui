import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const Crosscursor = props => (
  <SvgIcon {...props} viewBox="0 0 64 64">
    <path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="4" d="M32 8v48M56 32H8M40 16l-8-8-8 8M24 48l8 8 8-8M48 40l8-8-8-8M16 24l-8 8 8 8"/>
  </SvgIcon>
);

export default Crosscursor;
