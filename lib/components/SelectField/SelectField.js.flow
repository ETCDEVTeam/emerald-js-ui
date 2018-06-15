import React from 'react';
import SelectField from 'material-ui/SelectField';
import muiThemeable from 'material-ui/styles/muiThemeable';

function getStyles(muiTheme) {
  return {
    boxSizing: 'border-box',
    height: '50px',
    border: `1px solid ${muiTheme.palette.borderColor}`,
    borderRadius: '1px',
    color: muiTheme.palette.textColor,
    fontSize: '16px',
    lineHeight: '24px',
    paddingLeft: '10px',
    paddingRight: '10px',
  }
}

export const Select = (props) => {
  const { style, muiTheme } = props;
  const defaultProps = {
    underlineShow: false
  }
  const styles = getStyles(muiTheme);
  return (
    <SelectField
    hintStyle={{opacity: 1, color: muiTheme.palette.secondaryTextColor, fontWeight: '200'}}
    underlineShow={false}
    style={{ ...style, ...styles }}
    {...props} />
  );
};

export default muiThemeable()(Select);
