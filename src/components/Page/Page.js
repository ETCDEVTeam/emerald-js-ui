import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  toolbar: {
    background: 'transparent',
    height: '100px',
    flex: 1,
    justifyContent: 'space-between',
  },
  childWrapper: {
    padding: '40px',
  },
});

const getIconWithButton = (icon) => {
  if (!icon) { return <div />; }
  return (
    <IconButton>
      {icon}
    </IconButton>
  );
};

export class Page extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
    rightIcon: PropTypes.element,
    leftIcon: PropTypes.element,
  };

  static defaultProps = {
    rightIcon: null,
    leftIcon: null,
  };

  render() {
    const {
      title, leftIcon, rightIcon, classes,
    } = this.props;
    return (
      <Paper>
        <Toolbar className={classes.toolbar}>
          {getIconWithButton(leftIcon)}
          <Typography variant="title" color="inherit">{title}</Typography>
          {getIconWithButton(rightIcon)}
        </Toolbar>

        <Divider />

        <div className={classes.childWrapper}>
          {this.props.children}
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(Page);
