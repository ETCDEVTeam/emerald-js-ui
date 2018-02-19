import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const EtcLogo = props => (
  <SvgIcon {...props} viewBox="0 0 512 512">
    <path fill="none" stroke={props.color || '#010103'} strokeWidth="28" strokeMiterlimit="10" d="M256 437.019L128.981 256 256 74.981 383.019 256z" />
    <path fill="none" stroke={props.color || '#010103'} strokeWidth="28" strokeMiterlimit="10" d="M128.092 256L256 192l127.908 64M383.908 256L256 320l-127.908-64" />
  </SvgIcon>
);

export default EtcLogo;
