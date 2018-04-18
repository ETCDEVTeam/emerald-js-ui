import React from 'react';
import PropTypes from 'prop-types';
import copy from 'copy-to-clipboard';
import injectSheet from 'react-jss';
import muiThemeable from 'material-ui/styles/muiThemeable';

import { Copytoclipboard as CloneIcon, Check1 as CheckCircle } from '../../icons3';

import styles from './styles';

export class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCheck: props.showCheck,
    };
  }
  onCopyClick() {
    copy(this.props.id);
    if (this.props.onCopyClick) {
      this.props.onCopyClick(this.props.id);
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
      classes, id, shortened, style, onClick, muiTheme
    } = this.props;

    if (!id) {
      return null;
    }


    let icons = null;
    if (!shortened) {
      icons = (<CloneIcon
        onClick={this.onCopyClick.bind(this)}
        className={classes.copyIcon}
      />);
    }
    if (this.state.showCheck) {
      icons = (
        <CheckCircle style={{color: muiTheme.palette.primary1Color}}/>
      );
    }

    const sanitizedId = (id.startsWith('0x') ? id : `0x${id}`);
    const value = shortened ?
      `${sanitizedId.substring(0, 7)}...${sanitizedId.substring(sanitizedId.length - 6, sanitizedId.length)}` :
      sanitizedId;

    return (
      <div className={classes.container} style={style}>
        <div onClick={onClick} className={classes.address}>
          {value}
        </div>
        {icons && <div>{icons}</div>}
      </div>
    );
  }
}

Address.propTypes = {
  onClick: PropTypes.func,
  onCopyClick: PropTypes.func,
  id: PropTypes.string.isRequired,
  shortened: PropTypes.bool,
  classes: PropTypes.object.isRequired,
};

Address.defaultProps = {
  shortened: false,
  showCheck: false,
};

export default muiThemeable()(injectSheet(styles)(Address));

