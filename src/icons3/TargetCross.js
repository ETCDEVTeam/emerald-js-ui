import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const TargetCross = props => (
  <SvgIcon {...props} viewBox="0 0 64 64">
    <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="4"/><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="4" d="M32 8v8M32 48v8M56 32h-8M8 32h8"/>
  </SvgIcon>
);

export default TargetCross;
