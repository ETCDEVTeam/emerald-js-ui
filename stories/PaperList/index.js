import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { muiTheme as storyBookMuiTheme } from 'storybook-addon-material-ui';

import muiTheme from '../../src/theme/index';

import Page from '../../src/components/Page';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';

const styles2 = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: '500px',
    maxWidth: '500px',
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
});

function PinnedSubheaderList(props) {
  const { classes } = props;

  return (
    <List className={classes.root} subheader={<li />}>
      {[0, 1, 2, 3, 4].map(sectionId => (
        <li key={`section-${sectionId}`} className={classes.listSection}>
          <ul className={classes.ul}>
            <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
            {[0, 1, 2].map(item => (
              <Paper>
                <ListItem key={`item-${sectionId}-${item}`}>
                  <ListItemText primary={`Item ${item}`} />
                </ListItem>
              </Paper>
            ))}
          </ul>
        </li>
      ))}
    </List>
  );
}

PinnedSubheaderList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const Boo = withStyles(styles2)(PinnedSubheaderList);

storiesOf('PaperList', module)
  .addDecorator(storyBookMuiTheme(muiTheme))
  .add('nip', () => (
    <Boo />
  ));

