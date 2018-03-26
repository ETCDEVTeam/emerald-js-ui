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
    const { value, underlineShow, className, multiLine, rowsMax, rows, disabled, classes, hintText } = this.props;
    return (
      <div className={classes.container}>
        <TextField
          hintText={hintText}
          disabled={disabled}
          multiLine={multiLine}
          rowsMax={rowsMax}
          rows={rows}
          className={className}
          value={value}
          underlineShow={underlineShow}
          fullWidth={true}
        />
      </div>
    );
  }
}

export default injectSheet(styles)(Input);
