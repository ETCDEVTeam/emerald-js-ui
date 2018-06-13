import React from 'react';
import SelectField from 'material-ui/SelectField';

const baseStyle = {
  boxSizing: 'border-box',
  height: '51px',
  border: '1px solid #C5C5C5',
  borderRadius: '1px',
  color: '#191919',
  fontSize: '16px',
  lineHeight: '24px',
  paddingLeft: '10px',
  paddingRight: '10px',
};

export const Select = (props) => {
  const { style } = props;
  const defaultProps = {
    underlineShow: false
  }
  return (<SelectField {...defaultProps} {...props} style={{ ...style, ...baseStyle }} />);
};

export default Select;
