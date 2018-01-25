import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const QrCode = props => (
  <SvgIcon {...props} viewBox="0 0 512 512">
    <path fill="none" stroke="#000" strokeWidth="28" strokeMiterlimit="10" d="M64 128V64h64M384 64h64v64M448 384v64h-64M128 448H64v-64M128 128h256v256H128z" />
    <path fill="none" stroke="#000" strokeWidth="28" strokeMiterlimit="10" d="M192 192h128v128H192z" />
  </SvgIcon>
);

export default QrCode;
