import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const Bitcoin = props => (
  <SvgIcon {...props} viewBox="0 0 1024 1024">
    <path fill="#F6B75D" d="M960 704c0 141.385-114.615 256-256 256H320C178.615 960 64 845.385 64 704V320C64 178.615 178.615 64 320 64h384c141.385 0 256 114.615 256 256v384z" />
    <g fill="none" stroke="#FFF" strokeWidth="32" strokeMiterlimit="10">
      <path d="M336 512h256M592 288H336v448h256M592 512c61.856 0 112-50.144 112-112s-50.144-112-112-112M592 736c61.856 0 112-50.144 112-112s-50.144-112-112-112" />
    </g>
    <path fill="none" stroke="#FFF" strokeWidth="32" strokeMiterlimit="10" d="M608 192v96M416 192v96M608 736v96M416 736v96" />
  </SvgIcon>
);

export default Bitcoin;
