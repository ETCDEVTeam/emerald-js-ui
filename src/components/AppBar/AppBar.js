import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import AccountSelect from '../AccountSelect';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import Select from '@material-ui/core/Select';
import { Block as BlockIcon, EtcSimple } from '../../icons3';


import {
  HttpTransportProvider,
  HttpTransportContext,
} from '../../providers/HttpTransportProvider';

import EthRpc from '../../providers/EthRpc';

const styles = theme => ({
  title: {
    color: theme.palette.primary
  },
  flex: {
    flexGrow: 1
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: `${theme.spacing.unit * 3}px`,
    '&:last-child': {
      marginRight: '0px'
    }
  },
  icon: {
    marginRight: `${theme.spacing.unit}px`
  }
});

class TitBurgerApp extends React.Component {
  render() {
    return (
      <EthRpc method="eth.getBlockNumber">
        {blockNumber => (
          <div>
            <HttpTransportContext.Consumer>
              {({ changeUrl }) => (<Button onClick={() => changeUrl('http://localhost:8545')}>Toggle Networks</Button>)}
            </HttpTransportContext.Consumer>
            <Typography>blockNumber: {blockNumber.toString()}</Typography>
          </div>
        )}
      </EthRpc>
    );
  }
}


class EmeraldAppBar extends React.Component {
  static propTypes = {};

  static defaultProps = {
  };

  render() {
    const { classes, title, subtitle, balance, symbol, fiatBalance, fiatSymbol, blockNumber } = this.props;
    const children = (this.props.children && this.props.children.length && this.props.children.length > 0) ? this.props.children : [this.props.children]

    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography color="primary">
            {title}
          </Typography>
          &nbsp;
          <Typography className={classes.flex}>
            {subtitle}
          </Typography>
          <div className={classes.icon}>
            <AccountSelect />
          </div>
          {children.map((item, i) => <Typography key={i} className={classes.item}>{item}</Typography>)}

          <Typography className={classes.item}>
            <EtcSimple className={classes.icon} /> {balance} {symbol} - {fiatBalance} {fiatSymbol}
          </Typography>

          <TitBurgerApp />

        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(EmeraldAppBar);
