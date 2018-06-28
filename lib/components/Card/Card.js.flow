import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    border: `1px solid ${theme.palette.divider}`, // TODO: fixme
  },
});

const Card = props => (
  <div className={props.classes.root}>
    { props.children }
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Card);
