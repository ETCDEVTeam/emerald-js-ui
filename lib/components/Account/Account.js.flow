import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Pen3 as EditIcon } from '../../icons3';
import Address from '../Address';
import IdentityIcon from '../IdentityIcon';

import styles from './styles';
const getStyles = (theme) => ({
  container: {
    backgroundColor: 'inherit',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  editIcon: {
    width: '13px',
    height: '13px',
    cursor: 'pointer',
  },
  primaryContainer: {
    lineHeight: '22px',
    fontSize: '14px',
  },
  accountName: {
    display: 'flex',
    alignItems: 'center',
  },
});

const showIdentity = (show, id, identityProps) => {
  const props = {
    size: 48,
    ...identityProps,
  };
  if (show) {
    return (
      <div style={{ width: '30px', marginRight: '10px' }}>
        <IdentityIcon id={id} {...props} />
      </div>
    );
  }
  return null;
};

export const Account = (props) => {
  const {
    classes, primary, secondary, addr, shortened, description, name, editable, hideCopy
  } = props;
  const {
    onAddressClick, onEditClick, identity, identityProps,
  } = props;

  let wrapStyle;

  if (shortened) {
    wrapStyle = { width: identity ? '80%' : '100%' }
  }

  return (
    <div className={classes.container}>
      {showIdentity(identity, addr, identityProps)}
      <div style={wrapStyle}>
        <div className={classes.primaryContainer}>
          {primary ||
          <div onClick={onEditClick} className={classes.accountName}>
            <div>{ name }</div>
            {editable && <div style={{ marginLeft: '5px' }}><EditIcon style={styles.editIcon} /></div>}
          </div>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {secondary || <Address
            onClick={onAddressClick}
            id={addr}
            shortened={shortened}
            hideCopy={hideCopy}
          />}
        </div>
      </div>
    </div>
  );
};

Account.defaultProps = {
  editable: false,
  onAddressClick: () => {},
};

Account.propTypes = {
  identity: PropTypes.bool,
  identityProps: PropTypes.object,
  editable: PropTypes.bool,
  onAddressClick: PropTypes.func,
  onEditClick: PropTypes.func,
};

export default withStyles(getStyles)(Account);
