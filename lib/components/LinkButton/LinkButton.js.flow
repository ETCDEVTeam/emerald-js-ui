import React from 'react';
import injectSheet from 'react-jss';
import { FlatButton } from 'material-ui';
import muiThemeable from 'material-ui/styles/muiThemeable';
import styles from './styles';


const LinkButton = ({classes, muiTheme, ...other}) => {
  const { style } = other;
  const color = style && style.color ? style.color : muiTheme.palette.primary1Color;
  return (
    <FlatButton
      {...other}
      style={{color, ...style}}
      className={classes.linkButton}
    />);
};

export default muiThemeable()(injectSheet(styles)(LinkButton));
