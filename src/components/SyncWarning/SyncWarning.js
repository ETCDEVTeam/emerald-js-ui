import React from 'react';
import injectSheet from 'react-jss';
import { Spinner1 as Spinner } from '../../icons2';
import styles from './styles';


const SyncWarning = (props) => {
  const {
    startingBlock, currentBlock, highestBlock,
    classes, ...other
  } = props;

  const height = highestBlock || 5464306;
  if (height - currentBlock >= 20) {
    return (
      <div className={classes.container}>
        <div><Spinner color={styles.text.color} /></div>
        <div className={classes.text}>
                  You are connected to not synced node, your balances can show wrong value.
        </div>
        { startingBlock && currentBlock && highestBlock &&
          (<div className={classes.text}>
              About {highestBlock - currentBlock} blocks left.
          </div>)}
      </div>);
  }
  return null;
};

export default (injectSheet(styles)(SyncWarning));
