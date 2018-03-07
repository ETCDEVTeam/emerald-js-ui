import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const MultiSigWallet = props => (
  <SvgIcon {...props} viewBox="0 0 512 512">
    <path fill="none" stroke={props.color || '#000'} strokeWidth="28" strokeMiterlimit="10" d="M256 64v384M256 160h96v192h-96M256 352h-96V160h96" />
    <path fill="none" stroke={props.color || '#000'} strokeWidth="28" strokeMiterlimit="10" d="M64 64h384v384H64z" />
  </SvgIcon>
);

export default MultiSigWallet;
