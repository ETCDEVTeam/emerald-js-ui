import React from 'react';
import PropTypes from 'prop-types';
import { IconMenu } from 'material-ui';
import { Book } from '../../../icons3';
import AddressIconMenuItem from './AddressIconMenuItem';

class AddressIconMenu extends React.Component {
  static propTypes = {
    addressBookAddresses: PropTypes.arrayOf(PropTypes.string).isRequired,
    onChange: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onRequestChange = this.onRequestChange.bind(this);
    this.state = {};
  }

  onChange(address) {
    this.setMenuOpen(false);
    this.props.onChange(address);
  }

  onRequestChange(status) {
    this.setMenuOpen(status);
  }

  onClick() {
    this.setState({ menuOpen: true });
  }

  setMenuOpen(status) {
    this.setState({ menuOpen: status });
  }

  render() {
    return (
      <IconMenu
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        iconButtonElement={<Book />}
        open={this.state.menuOpen}
        onClick={this.onClick}
        useLayerForClickAway={false}
        onRequestChange={this.onRequestChange}
      >
        {
          this.props.addressBookAddresses.map(
            (address) => (<AddressIconMenuItem address={address} onChange={this.onChange} />)
          )
        }
      </IconMenu>
    );
  }
}

export default AddressIconMenu;
