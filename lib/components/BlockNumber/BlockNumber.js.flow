import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Block as BlockIcon } from '../../icons3';
import EthRpc from '../../providers/EthRpc';

const styles = theme => ({
  root: {},
  icon: {
    marginRight: theme.spacing.unit
  }
});

class BlockNumber extends React.Component {
  render() {
    const { classes, blockNumber } = this.props;
    return (
      <React.Fragment>
        <BlockIcon className={classes.icon} /> {blockNumber}
      </React.Fragment>
    )
  }
}

export default withStyles(styles, { name: 'EmeraldBlockNumber' })(BlockNumber);