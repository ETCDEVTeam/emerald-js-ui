import React from 'react';
import PropTypes from 'prop-types';
import { FlatButton } from 'material-ui';
import muiThemeable from 'material-ui/styles/muiThemeable';

const Button = ({ muiTheme, ...props }) => {
  const {
    disabled, primary, style,
  } = props;
  const styles = {
    primary: {
      height: '40px',
      color: muiTheme.palette.alternateTextColor,
    },
    ordinary: {
      height: '40px',
      color: muiTheme.palette.alternateTextColor,
    },
  };
  const labelStyle = {
    fontSize: '15px',
    fontWeight: '500',
    lineHeight: '18px',
  };
  const hoverColor = {
    primary: muiTheme.palette.primary2Color,
    ordinary: muiTheme.palette.accent2Color,
  };
  if (primary) {
    return (
      <FlatButton
        {...props}
        backgroundColor={disabled ? muiTheme.palette.disabledColor : muiTheme.palette.primary1Color}
        style={{ ...styles.primary, ...style }}
        labelStyle={{ ...labelStyle, ...props.labelStyle }}
        hoverColor={hoverColor.primary}
      />
    );
  }
  return (
    <FlatButton
      {...props}
      backgroundColor={muiTheme.palette.accent3Color}
      style={{ ...styles.ordinary, ...style }}
      labelStyle={{ ...labelStyle, ...props.labelStyle }}
      hoverColor={hoverColor.ordinary}
    />
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  primary: PropTypes.bool,
  labelStyle: PropTypes.object,
};

Button.defaultProps = {
  disabled: false,
  primary: false,
};

export default muiThemeable()(Button);
