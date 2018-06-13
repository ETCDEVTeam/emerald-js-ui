// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem } from 'material-ui';
import IdentityIcon from '../IdentityIcon';
import SelectField from '../SelectField';
import { DropdownArrowDown } from '../../icons3';

/**
 * Address with IdentityIcon. We show it in from field select control
 */
const AddressWithIcon = ({ address, name }) => {
  const style = {
    div: {
      display: 'flex',
      alignItems: 'center',
    },
    address: {
      marginLeft: '5px',
      fontSize: '16px',
      color: '#191919',
    },
  };
  return (
    <div style={style.div}>
      <IdentityIcon size={30} expanded={true} id={ address }/>
      <div style={ style.address }>{ name || address }</div>
    </div>
  );
};


class SelectAddressInput extends React.Component {
    static propTypes = {
      name: PropTypes.string.isRequired,
      accounts: PropTypes.array.isRequired,
      onChangeAccount: PropTypes.func,
      containerStyle: PropTypes.any,
    };

    onChange = (event, value) => {
      this.props.onChangeAccount(this.props.accounts, value);
    };

    render() {
      const { selectedAccount, accounts, containerStyle, iconButton, emptyAccountMenuItem } = this.props;
      const _emptyAccountMenuItem = emptyAccountMenuItem || (<MenuItem key={1} value={1} primaryText="Empty" />);
      return (
        <div style={containerStyle}>
          <SelectField
            name={ selectedAccount }
            value={ selectedAccount }
            onChange={ this.onChange }
            fullWidth={ true }
            dropDownMenuProps={{
              iconButton: iconButton || (<DropdownArrowDown />),
              menuStyle: {
                overflowX: 'hidden',
              },
              selectionRenderer: (val) => {
                if (val) {
                  return (<AddressWithIcon address={ val }/>)
                }
              },
            }}>
          { accounts.length > 0 ? accounts.map((account) =>
              <MenuItem
                key={ account }
                value={ account }
                primaryText={<AddressWithIcon address={ account }/> }
              />
            ) : _emptyAccountMenuItem
          }
          </SelectField>
        </div>
      );
    }
}

export default SelectAddressInput;
