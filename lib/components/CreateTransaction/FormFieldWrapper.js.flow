import React from 'react';
import PropTypes from 'prop-types';

function getStyles() {
  return {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 0,
    paddingBottom: '20px',
  };
}


class FormFieldWrapper extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  render() {
    return (
      <div style={getStyles()}>
        {this.props.children}
      </div>
    );
  }
}

export default FormFieldWrapper;
