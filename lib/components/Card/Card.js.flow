import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
  container: {
    borderRadius: '1px',
    backgroundColor: '#FFFFFF',
  },
};

const Card = props => (
  <div style={props.style} className={props.classes.container}>
    { props.children }
  </div>);

Card.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  classes: PropTypes.object.isRequired,
};

export default injectSheet(styles)(Card);

