import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const Spinner1 = props => (
  <SvgIcon {...props} viewBox="0 0 512 512">
    <path fill="none" stroke={props.color || "#000"} strokeWidth="28" strokeMiterlimit="10" d="M256 64v96M256 448v-96M448 256h-96M64 256h96M391.765 120.235l-67.882 67.882M120.235 391.765l67.882-67.883M391.765 391.765l-67.882-67.882M120.235 120.235l67.882 67.882" />
  </SvgIcon>
);

export default Spinner1;
