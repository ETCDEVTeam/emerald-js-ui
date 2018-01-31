import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const Contract = props => (
  <SvgIcon {...props} viewBox="0 0 512 512">
    <path fill="none" stroke={props.color || "#000"} strokeWidth="28" strokeMiterlimit="10" d="M320 192l64 64-64 64M192 320l-64-64 64-64M272 160l-32 192" />
    <path fill="none" stroke={props.color || "#000"} strokeWidth="28" strokeMiterlimit="10" d="M64 96h384v320H64z" />
  </SvgIcon>
);

export default Contract;
