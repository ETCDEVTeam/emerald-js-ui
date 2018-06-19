import React from 'react';
import PropTypes from 'prop-types';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Toolbar, ToolbarTitle, ToolbarGroup } from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import Card from '../Card';


function getStyles(muiTheme) {
  return {
    wrapper: {
      border: `1px solid ${muiTheme.palette.borderColor}`,
      backgroundColor: muiTheme.palette.alternateTextColor,
    },
    toolbar: {
      background: 'transparent',
      height: '100px',
    },
    childWrapper: {
      padding: '50px',
    },
  };
}

const getIconWithButton = (icon) => {
  if (!icon) { return <div />; }
  return (
    <ToolbarGroup>
      <IconButton>
        {icon}
      </IconButton>
    </ToolbarGroup>
  );
};

export class Page extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    muiTheme: PropTypes.object.isRequired,
    children: PropTypes.element.isRequired,
    rightIcon: PropTypes.element,
    leftIcon: PropTypes.element,
  };

  static defaultProps = {
    rightIcon: null,
    leftIcon: null,
  };

  render() {
    const { muiTheme, title, leftIcon, rightIcon } = this.props;
    const styles = getStyles(muiTheme);

    return (
      <Card style={styles.wrapper}>
        <Toolbar style={styles.toolbar}>
          {getIconWithButton(leftIcon)}
          <ToolbarTitle style={{ lineHeight: styles.toolbar.height }} text={title} />
          {getIconWithButton(rightIcon)}
        </Toolbar>

        <Divider />

        <div style={{ padding: '50px' }}>
          {this.props.children}
        </div>
      </Card>
    );
  }
}

export default muiThemeable()(Page);
