import React from 'react';
import PropTypes from 'prop-types';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Toolbar, ToolbarTitle, ToolbarGroup } from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';


function getStyles(muiTheme) {
  return {
    wrapper: {
      border: `1px solid ${muiTheme.palette.borderColor}`
    },
    toolbar: {
      background: 'transparent',
      height: '100px'
    }
  }
}

export class Page extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  getIconWithButton(icon) {
    if (!icon) { return <div />; }
    return (
      <ToolbarGroup>
        <IconButton>
          {icon}
        </IconButton>
      </ToolbarGroup>
    );
  }

  render() {
    const {muiTheme, title, leftIcon, rightIcon} = this.props
    const styles = getStyles(muiTheme);
    return (
      <div style={styles.wrapper}>
        <Toolbar style={styles.toolbar}>
          {this.getIconWithButton(leftIcon)}
          <ToolbarTitle style={{lineHeight: styles.toolbar.height}} text={title} />
          {this.getIconWithButton(rightIcon)}
        </Toolbar>
        <Divider />
        {this.props.children}
      </div>
    )
  }
}

export default muiThemeable()(Page);