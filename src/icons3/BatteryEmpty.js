import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const BatteryEmpty = props => (
  <SvgIcon {...props} viewBox="0 0 64 64">
    <path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="4" d="M48 24v-8H8v32h40v-8h8V24h-8z"/>
  </SvgIcon>
);

export default BatteryEmpty;
