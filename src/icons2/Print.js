import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const Print = props => (
  <SvgIcon {...props} viewBox="0 0 512 512">
    <path fill="none" stroke={props.color || "#000"} strokeWidth="28" strokeMiterlimit="10" d="M128 288H64V128h384v160h-64M160 128V64h192v64" />
    <path fill="none" stroke={props.color || "#000"} strokeWidth="28" strokeMiterlimit="10" d="M128 256h256v192H128zM192 320h128M192 384h128" />
  </SvgIcon>
);

export default Print;
