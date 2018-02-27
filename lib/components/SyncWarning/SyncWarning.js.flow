import React from 'react';
import injectSheet from 'react-jss';
import { Spinner1 as Spinner } from '../../icons2';
import styles from './styles';


const SyncWarning = (props) => {
  const {
    startingBlock, currentBlock, highestBlock,
    classes, ...other
  } = props;

  return (
    <div className={classes.container}>
      <div><Spinner color={styles.text.color} /></div>
      <div className={classes.text}>
                We are syncing, your balances can be wrong
      </div>
      { startingBlock && currentBlock && highestBlock && 
        (<div className={classes.text}>
            {startingBlock}/{currentBlock}/{highestBlock}
        </div>)}
    </div>);
};

export default (injectSheet(styles)(SyncWarning));