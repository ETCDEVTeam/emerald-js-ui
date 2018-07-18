import React from 'react';
import PropTypes from 'prop-types';
import copy from 'copy-to-clipboard';
import { withStyles } from '@material-ui/core/styles';
import ToggledIconButton from '../ToggledIconButton';

import { Copytoclipboard as CloneIcon, Check1 as CheckCircle } from '../../icons3';

const getStyles = theme => ({
  container: {
    height: '28px',
    display: 'flex',
    alignItems: 'center',
  },
  address: {
    cursor: 'pointer',
  },
  shortenedAddress: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
});

export class Address extends React.Component {
  static propTypes = {
    showCopy: PropTypes.bool,
    onCopyClick: PropTypes.func,
    id: PropTypes.string.isRequired,
    shortened: PropTypes.bool,
    classes: PropTypes.object.isRequired,
  };

  static defaultProps = {
    showCopy: true,
    shortened: false,
    showCheck: false,
    onCopyClick: () => {},
  };

  constructor(props) {
    super(props);
    this.onCopyClick = this.onCopyClick.bind(this);
  }

  onCopyClick() {
    copy(this.props.id);
    this.props.onCopyClick(this.props.id);
  }

  get id() {
    const idProp = this.props.id;
    return (idProp.startsWith('0x') ? idProp : `0x${idProp}`);
  }

  render() {
    const { classes, shortened } = this.props;

    const addressClassname = classes.address + shortened ? classes.shortenedAddress : '';

    return (
      <div className={classes.container}>
        <div className={addressClassname}>{this.id}</div>
        <ToggledIconButton
          onClick={this.onCopyClick}
          icon={<CloneIcon />}
          toggledIcon={<CheckCircle />}
        />
      </div>
    );
  }
}

export default withStyles(getStyles)(Address);
