// @flow
import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './styles';

export const ButtonGroup = ({ classes, children, style }: { children: Array<any>}) => {
  if (!children) {
    return null;
  }
  let key = 0;
  return (
    <div className={classes.container} style={style}>
      { children.map((btn) => {
          const item = (
            <div key={key} className={(key === 0) ? classes.firstItem : classes.item}>
              { btn }
            </div>);
          key += 1;
          return item;
      })}
    </div>
  );
};

ButtonGroup.propTypes = {
  children: PropTypes.array,
  classes: PropTypes.object.isRequired,
};

export default injectSheet(styles)(ButtonGroup);
