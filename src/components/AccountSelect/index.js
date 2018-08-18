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
    backgroundColor: theme.palette.background.paper,
    cursor: 'pointer',
  },
});


class SimpleListMenu extends React.Component {
  button = null;

  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      selectedIndex: Number.isInteger(props.selectedIndex) ? props.selectedIndex : 1,
    };
  }

  handleClickListItem = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuItemClick = (event, index) => {
    this.setState({ selectedIndex: index, anchorEl: null });
    this.props.onChange(index);
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
          address={this.props.accounts[this.state.selectedIndex]}
          addressWidth="200px"
        />
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {this.props.accounts.map((account, index) => (
            <MenuItem
              key={account}
              selected={index === this.state.selectedIndex}
              >
              <Account
                identity
                hideCopy
                address={account}
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
