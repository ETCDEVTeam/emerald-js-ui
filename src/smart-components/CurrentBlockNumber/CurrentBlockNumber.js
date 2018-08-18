import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Block as BlockIcon } from '../../icons3';
import EthRpc from '../../providers/EthRpc';

export default class CurrentBlockNumber extends React.Component {
  render() {
    return (
      <EthRpc method="eth.getBlockNumber">
        {blockNumber => (
          <React.Fragment>
            <BlockIcon style={{marginRight: '10px'}}/> {blockNumber}
          </React.Fragment>
        )}
      </EthRpc>
    )
  }
}