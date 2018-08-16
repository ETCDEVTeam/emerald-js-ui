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
      <HttpTransportProvider
        url={(this.state) ? this.state.rpcUrl : undefined }
        changeUrl={() => {
            this.setState({rpcUrl: 'http://localhost:8545'});
            return 'http://localhost:8545';
        }}>
        <EthRpc method="eth.getBlockNumber">
          {isSyncing => (
            <div>
              <HttpTransportContext.Consumer>
                {({ changeUrl }) => (<Button onClick={changeUrl}>Toggle Networks</Button>)}
              </HttpTransportContext.Consumer>
              <Typography>is Syncing: {isSyncing.toString()}</Typography>
            </div>
          )}
        </EthRpc>
      </HttpTransportProvider>
    );
  }
}


class EmeraldAppBar extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    const { classes, title, subtitle, balance, symbol, fiatBalance, fiatSymbol, blockNumber } = this.props;
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
          <Typography className={classes.item}>
            <BlockIcon className={classes.icon} /> {blockNumber}
          </Typography>
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
