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
    const { onChange, muiTheme } = this.props;
    const styles = getStyles(muiTheme);
    if (value) {
      return (
        <div style={{...styles, ...containerStyle}} className={classes.container}>
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
      <div style={{...styles, ...containerStyle}} className={classes.container}>
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

export default muiThemeable()(injectSheet(styles)(Input));
