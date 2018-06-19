import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames/bind';
import blockies from './blockies';
import styles from './styles';


export const IdentityIcon = ({
  classes, id, size, onClick, style,
}) => {
  const iconSize = Number.isInteger(size) ? size : 40;
  const icon = blockies.create({
    seed: (id || '').toLowerCase(),
    size: 8,
    scale: 4,
  }).toDataURL();
  const mainStyle = {
    ...style,
    height: `${iconSize}px`,
    width: `${iconSize}px`,
    minWidth: `${iconSize}px`,
    background: `url(${icon})`,
    borderRadius: '50%',
    position: 'relative',
  };

  const cx = classNames.bind(classes);
  const className = cx({
    clickAble: (onClick !== null) && (typeof onClick === 'function'),
  });
  return (
    <div style={mainStyle} onClick={onClick} className={className} />
  );
};

IdentityIcon.propTypes = {
  id: PropTypes.string.isRequired,
  size: PropTypes.number,
  onClick: PropTypes.func,
  classes: PropTypes.object,
  style: PropTypes.object,
};

IdentityIcon.defaultProps = {
  size: 40,
};

export default injectSheet(styles)(IdentityIcon);
