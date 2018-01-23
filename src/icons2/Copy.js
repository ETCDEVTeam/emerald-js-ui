import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const Copy = props => (
  <SvgIcon {...props} viewBox="0 0 512 512">
    <path fill="none" stroke="#000" strokeWidth="28" strokeMiterlimit="10" d="M192 192h256v256H192z" />
    <path fill="none" stroke="#000" strokeWidth="28" strokeMiterlimit="10" d="M192 320H64V64h256v128" />
  </SvgIcon>
);

export default Copy;
