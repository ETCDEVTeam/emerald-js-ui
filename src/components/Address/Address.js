import React from 'react';
import PropTypes from 'prop-types';
import copy from 'copy-to-clipboard';
import injectSheet from 'react-jss';

import { Copy as CloneIcon, Check } from '../../icons';

import styles from './styles';

export class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCheck: props.showCheck || false,
    };
  }
  onClick() {
    copy(this.props.id);
    if (this.props.onClick) {
      this.props.onClick(this.props.id);
    }
    this.setState({
      showCheck: true,
    });
    setTimeout(() => {
      this.setState({
        showCheck: false,
      });
    }, 1000);
  }
  render() {
    const {
      classes, id, shortened, style,
    } = this.props;

    if (!id) {
      return null;
    }


    let icons = null;
    if (!shortened) {
      icons = (<CloneIcon
        onClick={this.onClick.bind(this)}
        color={classes.container.color}
        className={classes.copyIcon}
      />);
    }
    if (this.state.showCheck) {
      icons = (
        <Check />
      );
    }

    const sanitizedId = (id.startsWith('0x') ? id : `0x${id}`);
    const value = shortened ?
      `${sanitizedId.substring(0, 7)}...${sanitizedId.substring(sanitizedId.length - 6, sanitizedId.length)}` :
      sanitizedId;

    return (
      <div className={classes.container} style={style}>
        <div onClick={this.onClick.bind(this)} className={classes.address}>
          {value}
        </div>
        {icons && <div>{icons}</div>}
      </div>
    );
  }
}

Address.propTypes = {
  onClick: PropTypes.func,
  id: PropTypes.string.isRequired,
  shortened: PropTypes.bool,
  classes: PropTypes.object.isRequired,
};

Address.defaultProps = {
  shortened: false,
};

export default injectSheet(styles)(Address);
