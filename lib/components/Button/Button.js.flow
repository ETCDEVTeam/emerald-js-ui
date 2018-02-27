import React from 'react';
import PropTypes from 'prop-types';
import { FlatButton } from 'material-ui';
import muiThemeable from 'material-ui/styles/muiThemeable';

const Button = ({muiTheme, ...props}) => {
  const {
    disabled, primary, style,
  } = props;
  const styles = {
    primary: {
      height: '40px',
      fontSize: '14px',
      fontWeight: '500',
      color: muiTheme.palette.alternateTextColor,
    },
    ordinary: {
      height: '40px',
      fontSize: '14px',
      fontWeight: '500',
      color: muiTheme.palette.textColor,
    },
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
        hoverColor={hoverColor.primary}
      />
    );
  }
  return (
    <FlatButton
      {...props}
      backgroundColor={muiTheme.palette.accent3Color}
      style={{ ...styles.ordinary, ...style }}
      hoverColor={hoverColor.ordinary}
    />
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  primary: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
  primary: false,
};

export default muiThemeable()(Button);
