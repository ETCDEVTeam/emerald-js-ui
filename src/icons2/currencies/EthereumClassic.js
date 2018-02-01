import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const EthereumClassic = props => (
  <SvgIcon {...props} viewBox="0 0 1024 1024">
    <path fill="#48AB53" d="M960 704c0 141.385-114.615 256-256 256H320C178.615 960 64 845.385 64 704V320C64 178.615 178.615 64 320 64h384c141.385 0 256 114.615 256 256v384z" />
    <path fill="none" stroke="#FFF" strokeWidth="32" strokeMiterlimit="10" d="M512 832l192-320-192-320-192 320z" />
    <path fill="none" stroke="#FFF" strokeWidth="32" strokeMiterlimit="10" d="M704 512l-192 96-192-96M320 512l192-96 192 96" />
  </SvgIcon>
);

export default EthereumClassic;
