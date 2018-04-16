import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const Circle = props => (
  <SvgIcon {...props} viewBox="0 0 64 64">
    <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="4"/>
  </SvgIcon>
);

export default Circle;
