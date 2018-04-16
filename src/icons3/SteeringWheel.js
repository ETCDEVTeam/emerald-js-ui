import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const SteeringWheel = props => (
  <SvgIcon {...props} viewBox="0 0 64 64">
    <circle cx="32" cy="32" r="12" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="4"/><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="4" d="M32 8v12M32 56V44M56 32H44M8 32h12M48.97 15.03l-8.48 8.48M15.03 48.97l8.48-8.48M48.97 48.97l-8.48-8.48M15.03 15.03l8.48 8.48"/>
  </SvgIcon>
);

export default SteeringWheel;
