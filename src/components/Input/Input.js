import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import InputAdornment from "@material-ui/core/InputAdornment";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    paddingLeft: '15px',
    paddingRight: '15px',
    display: 'flex',
    alignItems: 'center',
  },
});


const getErrorProps = ({ errorText }) => {
  const propsToAdd = {};

  if (errorText) {
    propsToAdd.helperText = errorText;
    propsToAdd.error = true;
  }

  return propsToAdd;
};

const getAdornments = ({ rightIcon, leftIcon }) => {
  const adornments = {};

  if (leftIcon) {
    adornments.startAdornment = (<InputAdornment> { leftIcon } </InputAdornment>);
  }

  if (rightIcon) {
    adornments.endAdornment = (<InputAdornment>{ rightIcon }</InputAdornment>);
  }

  return adornments;
};

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
    onChange: PropTypes.func,
    error: PropTypes.bool,
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
    error: false,
    onChange: () => {},
  };

  render() {
    const {
      value,
      multiLine,
      rowsMax,
      rows,
      disabled,
      onChange,
      placeholder,
    } = this.props;


    const textFieldProps = {
      disabled,
      multiLine,
      rowsMax,
      rows,
      fullWidth: true,
      onChange,
    };

    if (value) {
      textFieldProps.value = value;
    }


    const errorProps = getErrorProps(this.props);
    const adornments = getAdornments(this.props);

    return (
      <TextField
        fullWidth
        placeholder={placeholder}
        InputProps={adornments}
        {...errorProps}
      />
    );
  }
}

export default withStyles(styles)(Input);
