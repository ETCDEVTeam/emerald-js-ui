import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const ContractExecute2 = props => (
  <SvgIcon {...props} viewBox="0 0 512 512">
    <path fill="none" stroke={props.color || "#000"} strokeWidth="28" strokeMiterlimit="10" d="M128 320H64V64h320v64" />
    <circle fill="none" stroke={props.color || "#000"} strokeWidth="28" strokeMiterlimit="10" cx="320" cy="320" r="128" />
    <path fill="none" stroke={props.color || "#000"} strokeWidth="28" strokeMiterlimit="10" d="M288 256l64 64-64 64M128 128v32M192 128v32M256 128v32" />
  </SvgIcon>
);

export default ContractExecute2;
