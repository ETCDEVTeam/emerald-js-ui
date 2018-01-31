import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const Cli = props => (
  <SvgIcon {...props} viewBox="0 0 512 512">
    <path fill="none" stroke={props.color || "#000"} strokeWidth="28" strokeMiterlimit="10" d="M64 96h384v320H64z" />
    <path fill="none" stroke={props.color || "#000"} strokeWidth="28" strokeMiterlimit="10" d="M160 192l64 64-64 64M256 320h96" />
  </SvgIcon>
);

export default Cli;
