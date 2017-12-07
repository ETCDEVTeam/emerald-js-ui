import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames/bind';

const blockies = require('./blockies');

const styles = {
  expandedButton: {
    '&:before': {
      content: 'url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDEyIDE0Ij48cGF0aCBmaWxsPSIjNDdCMDRCIiBkPSJNOS41IDcuNXYtMXEwLTAuMjAzLTAuMTQ4LTAuMzUydC0wLjM1Mi0wLjE0OGgtMnYtMnEwLTAuMjAzLTAuMTQ4LTAuMzUydC0wLjM1Mi0wLjE0OGgtMXEtMC4yMDMgMC0wLjM1MiAwLjE0OHQtMC4xNDggMC4zNTJ2MmgtMnEtMC4yMDMgMC0wLjM1MiAwLjE0OHQtMC4xNDggMC4zNTJ2MXEwIDAuMjAzIDAuMTQ4IDAuMzUydDAuMzUyIDAuMTQ4aDJ2MnEwIDAuMjAzIDAuMTQ4IDAuMzUydDAuMzUyIDAuMTQ4aDFxMC4yMDMgMCAwLjM1Mi0wLjE0OHQwLjE0OC0wLjM1MnYtMmgycTAuMjAzIDAgMC4zNTItMC4xNDh0MC4xNDgtMC4zNTJ6TTEyIDdxMCAxLjYzMy0wLjgwNSAzLjAxMnQtMi4xODQgMi4xODQtMy4wMTIgMC44MDUtMy4wMTItMC44MDUtMi4xODQtMi4xODQtMC44MDUtMy4wMTIgMC44MDUtMy4wMTIgMi4xODQtMi4xODQgMy4wMTItMC44MDUgMy4wMTIgMC44MDUgMi4xODQgMi4xODQgMC44MDUgMy4wMTJ6Ij48L3BhdGg+PC9zdmc+)',
      position: 'absolute',
      fontFamily: 'FontAwesome, serif',
      top: 0,
      fontStyle: 'normal',
      fontWeight: 'normal',
      left: '24px',
      fontSize: '20px',
      height: '20px',
      width: '20px',
      margin: '0',
      color: '#47B04B',
      backgroundColor: 'white',
      borderRadius: '50%',
      textAlign: 'center',
      border: '1px solid #FFFFFF',
    },
  },
  clickAble: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
};

const IdentityIcon = ({
  classes, id, expanded, size, onClick,
}) => {
  const iconSize = Number.isInteger(size) ? size : 40;
  const icon = blockies.create({ seed: id, size: 8, scale: 4 }).toDataURL();
  const mainStyle = {
    height: `${iconSize}px`,
    width: `${iconSize}px`,
    minWidth: `${iconSize}px`,
    background: `url(${icon})`,
    borderRadius: '50%',
    position: 'relative',
  };

  const expandButton = expanded ? '' : (<div className={classes.expandedButton} />);
  const cx = classNames.bind(classes);
  const className = cx({
    clickAble: (onClick !== null) && (typeof onClick === 'function'),
  });

  return (
    <div style={mainStyle} onClick={onClick} className={className}>
      { expandButton }
    </div>
  );
};

IdentityIcon.propTypes = {
  id: PropTypes.string.isRequired,
  expanded: PropTypes.bool,
  size: PropTypes.number,
  onClick: PropTypes.func,
  classes: PropTypes.object,
};

export default injectSheet(styles)(IdentityIcon);
