import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import InputAdornment from "@material-ui/core/InputAdornment";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    boxSizing: 'border-box',
    borderRadius: '1px',
    paddingLeft: '15px',
    paddingRight: '15px',
    display: 'flex',
    alignItems: 'center',
    border: `1px solid ${theme.palette.divider}`,
  },
  errorText: {
    bottom: '-3px',
    color: theme.palette.accent1Color,
  }
});

export class Input extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    className: PropTypes.string,
    multiLine: PropTypes.bool,
    rowsMax: PropTypes.number,
    rows: PropTypes.number,
    disabled: PropTypes.bool,
    rightIcon: PropTypes.element,
    leftIcon: PropTypes.element,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.required,
    containerStyle: PropTypes.object,
    classes: PropTypes.object,
  };

  static defaultProps = {
    multiLine: false,
    rowsMax: 1,
    rows: 1,
    disabled: false,
    value: null,
    className: null,
    rightIcon: null,
    leftIcon: null,
    placeholder: null,
  };

  render() {
    const {
      value,
      className,
      multiLine,
      rowsMax,
      rows,
      disabled,
      containerStyle,
      onChange,
      muiTheme,
      classes,
      placeholder,
      ...other
    } = this.props;


    const textFieldProps = {
      disabled,
      multiLine,
      rowsMax,
      rows,
      className,
      fullWidth: true,
      onChange,
      ...other,
    };

    if (value) {
      textFieldProps.value = value;
    }

    return (
      <TextField
        fullWidth="true"
        placeholder={placeholder}
        InputProps={{
          startAdornment: (
            <InputAdornment>
              { this.props.leftIcon }
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment>
              { this.props.rightIcon }
            </InputAdornment>
          )
        }}
      />
    );
  }
}

export default withStyles(styles)(Input);
