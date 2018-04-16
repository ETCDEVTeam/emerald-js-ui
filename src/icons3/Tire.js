import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const Tire = props => (
  <SvgIcon {...props} viewBox="0 0 64 64">
    <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="4"/><circle cx="32" cy="32" r="12" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="4"/><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="4" d="M40 24h16M40 40h16M40 40v16M24 40v16M24 40H8M24 24H8M24 24V8M40 24V8"/>
  </SvgIcon>
);

export default Tire;
