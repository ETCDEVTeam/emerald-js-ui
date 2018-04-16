import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const Crop = props => (
  <SvgIcon {...props} viewBox="0 0 64 64">
    <path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="4" d="M56 48H16V8"/><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="4" d="M8 16h40v40M8 56L56 8"/>
  </SvgIcon>
);

export default Crop;
