import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { TextField } from 'material-ui';
import muiThemeable from 'material-ui/styles/muiThemeable';

import styles from './styles';

function getStyles(muiTheme) {
  return {
    border: `1px solid ${muiTheme.palette.borderColor}`,
  }
}

export class Input extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    underlineShow: PropTypes.bool,
    className: PropTypes.string,
    multiLine: PropTypes.bool,
    rowsMax: PropTypes.number,
    rows: PropTypes.number,
    disabled: PropTypes.bool,
    rightIcon: PropTypes.element,
    leftIcon: PropTypes.element,
    muiTheme: PropTypes.object,
    onChange: PropTypes.func.required,
    containerStyle: PropTypes.object,
    classes: PropTypes.object,
  };

  static defaultProps = {
    multiLine: false,
    rowsMax: 1,
    rows: 1,
    disabled: false,
    underlineShow: false,
    value: null,
    className: null,
    rightIcon: null,
    leftIcon: null,
    muiTheme: null,
  };

  render() {
    const {
      value,
      underlineShow,
      className,
      multiLine,
      rowsMax,
      rows,
      disabled,
      classes,
      containerStyle,
      onChange,
      muiTheme,
      ...other
    } = this.props;

    const localStyle = getStyles(muiTheme);

    const textFieldProps = {
      disabled,
      multiLine,
      rowsMax,
      rows,
      className,
      underlineShow,
      fullWidth: true,
      onChange,
      ...other,
    };

    if (value) {
      textFieldProps.value = value;
    }

    return (
      <div
        style={{ ...localStyle, ...containerStyle }}
        className={classes.container}
      >
        {this.props.leftIcon}
        <TextField
          errorStyle={{bottom: '-3px', color: muiTheme.palette.accent1Color}}
          {...textFieldProps}
        />
        {this.props.rightIcon}
      </div>
    );
  }
}

export default muiThemeable()(injectSheet(styles)(Input));
