import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const ArrowDown = props => (
  <SvgIcon {...props} viewBox="0 0 512 512">
    <path fill="none" stroke={props.color || "#000"} strokeWidth="28" strokeMiterlimit="10" d="M384 192L256 320 128 192" />
  </SvgIcon>
);

export default ArrowDown;
