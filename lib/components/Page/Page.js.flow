import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import Card from '../Card';

const styles = theme => ({
  toolbar: {
    background: 'transparent',
    height: '100px',
    flex: 1,
    justifyContent: 'center',
  },
  childWrapper: {
    padding: '50px',
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
    children: PropTypes.element.isRequired,
    rightIcon: PropTypes.element,
    leftIcon: PropTypes.element,
  };

  static defaultProps = {
    rightIcon: null,
    leftIcon: null,
  };

  render() {
    const { title, leftIcon, rightIcon, classes } = this.props;
    return (
      <Card>
        <Toolbar className={classes.toolbar}>
          {getIconWithButton(leftIcon)}
          <Typography variant="title" color="inherit">{title}</Typography>
          {getIconWithButton(rightIcon)}
        </Toolbar>

        <Divider />

        <div className={classes.childWrapper}>
          {this.props.children}
        </div>
      </Card>
    );
  }
}

export default withStyles(styles)(Page);
