import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const CheckCircle = props => (
  <SvgIcon {...props} viewBox="0 0 512 512">
    <path fill="none" stroke={props.color || "#000"} strokeWidth="28" strokeMiterlimit="10" d="M160.619 224.668L255.952 320l160-160" />
    <path fill="none" stroke={props.color || "#000"} strokeWidth="28" strokeMiterlimit="10" d="M438.1 316.716c-16.767 50.299-52.333 89.04-96.282 111.015-43.95 21.975-96.282 27.184-146.581 10.417s-89.039-52.333-111.014-96.282c-21.976-43.949-27.184-96.281-10.418-146.581 16.767-50.298 52.333-89.039 96.282-111.015 43.949-21.975 96.282-27.183 146.581-10.417" />
  </SvgIcon>
);

export default CheckCircle;
