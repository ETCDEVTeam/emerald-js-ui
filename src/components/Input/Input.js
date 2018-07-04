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

const getInputProps = props => ({
  InputProps: { ...getAdornments(props) },
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
      disabled,
      onChange,
    } = this.props;


    const textFieldProps = {
      disabled,
      multiLine,
      onChange,
    };

    const errorProps = getErrorProps(this.props);
    const inputProps = getInputProps(this.props);

    return (
      <TextField
        value={this.props.value}
        fullWidth
        rows={this.props.rows}
        rowsMax={this.props.rowsMax}
        disabled={this.props.disabled}
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
        {...inputProps}
        {...errorProps}
      />
    );
  }
}

export default withStyles(styles)(Input);
