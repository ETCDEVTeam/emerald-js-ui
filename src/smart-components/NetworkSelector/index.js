import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button, Menu, MenuItem, Typography } from '@material-ui/core';

import EthRpc from '../../providers/EthRpc';
import { EthJsonRpcProvider, EthJsonRpcContext } from '../../providers/EthJsonRpcProvider';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    cursor: 'pointer',
  },
});

const networks = [
  {
    url: 'https://web3.gastracker.io/morden',
    name: 'Gastracker',
  },
  {
    url: 'https://web3.gastracker.io/',
    name: 'Gastracker',
  },
  {
    url: 'http://localhost:8545',
    name: 'Local',
  }
];

class NetworkSelector extends React.Component {
  button = null;

  state = {
    anchorEl: null,
    selectedIndex: 0,
  };

  handleClickListItem = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuItemClick = (event, index) => {
    this.setState({ anchorEl: null });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;

    return (
      <EthJsonRpcContext.Consumer>
        {({ url, changeUrl }) => {
          const selectedNetwork = networks.find(network => network.url === url);

          return (
            <div className={classes.root}>
              <Button color="secondary" onClick={this.handleClickListItem}>
                { selectedNetwork.name }
              </Button>

              <Menu
                id="network-selector"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
              >
                {
                  networks.map((network) => (
                    <MenuItem key={network.url} selected={network.url === selectedNetwork.url}>
                      <div onClick={() => {
                          this.handleMenuItemClick();
                          changeUrl(network.url);
                        }}>
                        <EthJsonRpcProvider url={network.url}>
                          <EthRpc method="net.version">
                            {
                              (networkId) => {
                                return (
                                  <div>
                                    <Typography>{network.name}</Typography>
                                    <Typography>{networkId}</Typography>
                                  </div>
                                );
                              }
                            }
                          </EthRpc>
                        </EthJsonRpcProvider>
                      </div>
                    </MenuItem>
                  ))
                }
              </Menu>
            </div>
          );
        }}
      </EthJsonRpcContext.Consumer>
    );
  }
}

export default withStyles(styles)(NetworkSelector);
