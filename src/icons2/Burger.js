import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const Burger = props => (
  <SvgIcon {...props} viewBox="0 0 512 512">
    <path fill="none" stroke="#000" strokeWidth="28" strokeMiterlimit="10" d="M448 128H64M448 384H64M448 256H64" />
  </SvgIcon>
);

export default Burger;
