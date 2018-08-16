import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { HttpTransportProvider } from '../providers/HttpTransportProvider';
import theme from '../theme';

export class EmeraldProvider extends React.Component {
  static propTypes = {
    url: PropTypes.string,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    url: HttpTransportProvider.defaultUrl,
  };

  constructor() {
    super();
    this.state = { rpcUrl: HttpTransportProvider.defaultUrl };
    this.changeHttpTransportUrl = this.changeHttpTransportUrl.bind(this);
  }

  componentDidMount() {
    this.setState({ ...this.state, rpcUrl: this.props.url });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) {
      this.setState({ ...this.state, rpcUrl: this.props.url });
    }
  }

  changeHttpTransportUrl(newUrl) {
    this.setState({ url: newUrl });
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <HttpTransportProvider url={this.state.url} changeUrl={this.changeHttpTransportUrl}>
          {this.props.children}
        </HttpTransportProvider>
      </MuiThemeProvider>
    );
  }
}
