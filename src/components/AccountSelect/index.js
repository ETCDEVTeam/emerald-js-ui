import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Account from '../Account';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    cursor: 'pointer',
  },
});

const options = [
  '0x00asdfasdhfhasdfhashdj03401340030340s0dr0asdf0',
  '0x01a09sd0f01350ds0adf0',
  '0x030asd0fas013400134013401340134031013401340',
  '0x040r130r130r130fafw0ef0w',
];

class SimpleListMenu extends React.Component {
  button = null;

  state = {
    anchorEl: null,
    selectedIndex: 1,
  };

  handleClickListItem = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuItemClick = (event, index) => {
    this.setState({ selectedIndex: index, anchorEl: null });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;

    return (
      <div className={classes.root}>
        <Account
          identity
          onClick={this.handleClickListItem}
          address={options[this.state.selectedIndex]}
          addressWidth="200px"
        />
        <Menu
          id="lock-menu"
          chorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === this.state.selectedIndex}
              >
              <Account
                identity
                hideCopy
                address={option}
                onClick={event => this.handleMenuItemClick(event, index)}
              />
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

SimpleListMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleListMenu);
