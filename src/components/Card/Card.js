import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import muiThemeable from 'material-ui/styles/muiThemeable';

function getStyles(muiTheme) {
  return {
    borderRadius: '1px',
    backgroundColor: muiTheme.palette.alternateTextColor,
  }
}

const Card = props => (
  <div style={{...getStyles(props.muiTheme), ...props.style}}>
    { props.children }
  </div>
);

Card.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  muiTheme: PropTypes.object,
};

export default muiThemeable()(Card);

