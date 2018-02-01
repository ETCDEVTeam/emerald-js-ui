import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const Zcash = props => (
  <SvgIcon {...props} viewBox="0 0 1024 1024">
    <path fill="#2B90BE" d="M960 704c0 141.385-114.615 256-256 256H320C178.615 960 64 845.385 64 704V320C64 178.615 178.615 64 320 64h384c141.385 0 256 114.615 256 256v384z" />
    <path fill="none" stroke="#FFF" strokeWidth="32" strokeMiterlimit="10" d="M512 192v128M512 704v128M352 320h288L384 704h288" />
  </SvgIcon>
);

export default Zcash;
