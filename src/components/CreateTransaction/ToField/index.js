import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import FormLabel from '../FormLabel';
import Input from '../../Input';
import IdentityIcon from '../../IdentityIcon';
import AddressIconMenu from './AddressIconMenu';

class ToField extends React.Component {
  static propTypes = {
    onChangeTo: PropTypes.func.isRequired,
    to: PropTypes.string.isRequired,
    addressBookAddresses: PropTypes.arrayOf(PropTypes.string).isRequired,
  }

  constructor() {
    super();
    this.onChangeTo = this.onChangeTo.bind(this);
  }

  onChangeTo(event, value) {
    this.props.onChangeTo(value);
  }

  getLeftIcon() {
    if (!this.props.to) { return null; }
    return (
      <IdentityIcon
        style={{ marginRight: '5px' }}
        size={30}
        id={this.props.to}
      />
    );
  }

  getRightIcon() {
    return (
      <AddressIconMenu
        onChange={this.props.onChangeTo}
        addressBookAddresses={this.props.addressBookAddresses}
      />
    );
  }

  inputStyles = {
    flexGrow: 5,
  }

  render() {
    return (
      <Fragment>
        <FormLabel>To</FormLabel>
        <Input
          leftIcon={this.getLeftIcon()}
          rightIcon={this.getRightIcon()}
          containerStyle={this.inputStyles}
          value={this.props.to}
          onChange={this.onChangeTo}
        />
      </Fragment>
    );
  }
}

export default ToField;
