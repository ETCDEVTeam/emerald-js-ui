import React from 'react';
import Typography from '@material-ui/core/Typography';
import { EtcSimple } from '../../icons3';
import EthRpc from '../../providers/EthRpc';
import {EmeraldContext} from '../../providers/EmeraldProvider';
import { Wei } from 'emerald-js';

export default class EtcBalance extends React.Component {
  render() {
    return (
      <EmeraldContext.Consumer>
        {({account}) => {
          if (account === null) { return null }
          return (
            <EthRpc method="eth.getBalance" params={[account]}>
              {balance => (
                <React.Fragment>
                  <EtcSimple style={{marginRight: '10px'}} /> {new Wei(balance).getEther()} 
                </React.Fragment>
              )}
            </EthRpc>
          );
        }}
      </EmeraldContext.Consumer>
    )
  }
}