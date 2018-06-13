import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { TextField } from 'material-ui';

import styles from './styles';

export class Input extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    underlineShow: PropTypes.bool,
    className: PropTypes.string,
    multiLine: PropTypes.bool,
    rowsMax: PropTypes.number,
    rows: PropTypes.number,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    multiLine: false,
    rowsMax: 1,
    rows: 1,
    disabled: false,
    underlineShow: false,
  };

  render() {
    const { value, underlineShow, className, multiLine, rowsMax, rows, disabled, classes, containerStyle, ...other } = this.props;
    const { onChange } = this.props;
    if (value) {
      return (
        <div style={containerStyle} className={classes.container}>
          <TextField
            disabled={disabled}
            multiLine={multiLine}
            rowsMax={rowsMax}
            rows={rows}
            className={className}
            underlineShow={underlineShow}
            fullWidth={true}
            onChange={onChange}
            value={value}
            {...other}
          />
        </div>
      );
    };

    return (
      <div style={containerStyle} className={classes.container}>
        <TextField
          disabled={disabled}
          multiLine={multiLine}
          rowsMax={rowsMax}
          rows={rows}
          className={className}
          underlineShow={underlineShow}
          fullWidth={true}
          onChange={onChange}
          {...other}
        />
      </div>
    );
  }
}

export default injectSheet(styles)(Input);
