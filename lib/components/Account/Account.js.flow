import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import { Edit as EditIcon } from '../../icons';
import Address from '../Address';

import styles from './styles';

export const Account = (props) => {
  const {
    classes, primary, secondary, addr, abbreviated, description, name, editable,
  } = props;
  const { onAddressClick, onEditClick } = props;

  return (
    <div className={classes.container}>
      <div className={classes.primaryContainer}>
        {primary ||
        <div onClick={onEditClick} className={classes.accountName}>
          <div>{ name }</div>
          {editable && <div style={{ marginLeft: '5px' }}><EditIcon style={styles.editIcon} /></div>}
        </div>}
      </div>
      <div>
        {secondary || <Address
          onClick={onAddressClick}
          id={addr}
          shortened={abbreviated}
        />}
      </div>
    </div>
  );
};

Account.defaultProps = {
  editable: false,
  onAddressClick: () => {},
};

Account.propTypes = {
  editable: PropTypes.bool,
  onAddressClick: PropTypes.func,
  onEditClick: PropTypes.func,
};


export default injectSheet(styles)(Account);
