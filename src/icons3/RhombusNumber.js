import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const RhombusNumber = props => (
  <SvgIcon {...props} viewBox="0 0 64 64">
    <path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="4" d="M24 8v48M40 8v48M56 24H8M56 40H8"/>
  </SvgIcon>
);

export default RhombusNumber;
