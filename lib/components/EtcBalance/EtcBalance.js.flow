import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { EtcSimple } from '../../icons3';
import { Wei } from 'emerald-js';

const styles = theme => ({
  root: {},
  icon: {
    marginRight: theme.spacing.unit
  },
  gutterRight: {
    marginRight: theme.spacing.unit
  }
});

class EtcBalance extends React.Component {
  render() {
    const { balance, classes, gutterRight } = this.props;
    debugger
    if (balance === undefined) {
      return null;
    }
    return (
    <React.Fragment>
      <EtcSimple className={classes.icon}/>
      <Typography className={gutterRight ? classes.gutterRight : null}>
        {new Wei(balance).getEther()}
      </Typography>
    </React.Fragment>
    );
  }
}

export default withStyles(styles, { name: 'EmeraldEtcBalance' })(EtcBalance);