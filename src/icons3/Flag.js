import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const Flag = props => (
  <SvgIcon {...props} viewBox="0 0 64 64">
    <path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="4" d="M16 32h32L36 20 48 8H16v48"/>
  </SvgIcon>
);

export default Flag;
