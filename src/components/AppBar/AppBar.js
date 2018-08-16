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
import {EthRpc, JsonRpc, HttpTransport} from 'emerald-js';
import { Block as BlockIcon, EtcSimple } from '../../icons3';


import { HttpTransportProvider, HttpTransportContext } from '../../providers/HttpTransportProvider';

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

const EthRpcCallContext = React.createContext({});


class EthRpcProvider extends React.Component {
  static propTypes = {
    method: PropTypes.string.isRequired,
    params: PropTypes.array,
    transport: PropTypes.object.isRequired,
  };

  static defaultProps = {
    method: null,
    params: null,
  };

  constructor() {
    super();

    this.state = {
      ethrpc: null,
      result: null,
    };
  }

  componentDidMount() {
    this.setEthRpc();
  }

  componentDidUpdate(prevProps, prevState) {
    const transportChanged = prevProps.transport !== this.props.transport;
    if (transportChanged) {
      return this.setEthRpc();
    }

    const ethrpcChanged = prevState.ethrpc !== this.state.ethrpc;
    const methodChanged = prevProps.method !== this.props.method;
    const paramsChanged = prevProps.params !== this.props.params;

    if (ethrpcChanged || methodChanged || paramsChanged) {
      return this.getResult();
    }
  }

  setEthRpc() {
    const jsonRpc = new JsonRpc(this.props.transport);
    const ethrpc = new EthRpc(jsonRpc);

    this.setState({ ethrpc });
  }

  getResult() {
    const method = this.props.method
      .split('.')
      .reduce((memo, item) => memo[item], this.state.ethrpc);
    const params = this.props.params || [];
    return method.call(this.state.ethrpc, ...params)
      .then((result) => this.setState({ ...this.state, result }));
  }

  render() {
    if (this.state.result === null) { return null; }
    return (
      <EthRpcCallContext.Provider value={this.state.result}>
        {this.props.children}
      </EthRpcCallContext.Provider>
    );
  }
}

const EthRpcGG = ({method, params, refresh, children}) => {
  return (
    <HttpTransportContext.Consumer>
      {({ httpTransport }) => {
         const props = {
           method,
           params,
           refresh,
           transport: httpTransport,
         };
         return (
           <EthRpcProvider {...props}>
             <EthRpcCallContext.Consumer>
               {children}
             </EthRpcCallContext.Consumer>
           </EthRpcProvider>
         );
      }}
    </HttpTransportContext.Consumer>
  );
}


class TitBurgerApp extends React.Component {
  constructor() {
    super();
    this.toggleNetwork = this.toggleNetwork.bind(this);
  }

  toggleNetwork() {
    const { defaultUrl, localUrl } = HttpTransportProvider;
    this.setState({ rpcUrl: this.state.rpcUrl === defaultUrl ? localUrl : defaultUrl });
  }

  render() {
    return (
      <HttpTransportProvider url={this.state.rpcUrl} changeUrl={this.toggleNetwork}>
        <EthRpcGG method="eth.getBlockNumber">
          {isSyncing => (
            <div>
              <HttpTransportContext.Consumer>
                {({ changeUrl }) => (<Button onClick={changeUrl}>Toggle Networks</Button>)}
              </HttpTransportContext.Consumer>
              <Typography>is Syncing: {isSyncing.toString()}</Typography>
            </div>
          )}
        </EthRpcGG>
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
