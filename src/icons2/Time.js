import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const Time = props => (
  <SvgIcon {...props} viewBox="0 0 512 512">
    <circle fill="none" stroke="#000" strokeWidth="28" strokeMiterlimit="10" cx="256" cy="256" r="192" />
    <path fill="none" stroke="#000" strokeWidth="28" strokeMiterlimit="10" d="M328 352l-72-96V128" />
  </SvgIcon>
);

export default Time;
