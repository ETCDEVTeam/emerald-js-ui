import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const HardwareWallet = props => (
  <SvgIcon {...props} viewBox="0 0 512 512">
    <path fill="none" stroke="#000" strokeWidth="28" strokeMiterlimit="10" d="M96 320V64h320v256M64 448V320h384v128" />
    <path fill="none" stroke="#000" strokeWidth="28" strokeMiterlimit="10" d="M288 160h64v64h-64zM160 160h64v64h-64z" />
  </SvgIcon>
);

export default HardwareWallet;
