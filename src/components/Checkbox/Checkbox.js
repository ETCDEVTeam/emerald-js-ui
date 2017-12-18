// @flow
import React from 'react';
import { Checkbox as MCheckbox } from 'material-ui';

type Props = {
    label: string,
    checked?: boolean,
    disabled?: boolean,
    onCheck?: (any, boolean) => void;
};

const styles = {
  icon: {
    checked: {
      marginRight: '10px',
      fill: '#47B04B',
    },
    unchecked: {
      marginRight: '10px',
      fill: '#747474',
    },
  },
  label: {
    checked: {
      color: '#47B04B',
    },
    unchecked: {
      color: '#747474',
    },
  },
};

/**
 * For now this is a wrapper around Material-UI Checkbox
 */
export class Checkbox extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked,
    };
  }

    handleCheck = (event: any, isInputChecked: boolean) => {
      this.setState({
        checked: isInputChecked,
      });
      if (this.props.onCheck) {
        this.props.onCheck(event, isInputChecked);
      }
    };

    render() {
      const { checked } = this.state;
      const { label, disabled } = this.props;
      const iconStyle = checked ? styles.icon.checked : styles.icon.unchecked;
      const labelStyle = checked ? styles.label.checked : styles.label.unchecked;
      return (

        <MCheckbox
          checked={checked}
          disabled={disabled}
          iconStyle={iconStyle}
          labelStyle={labelStyle}
          label={label}
          onCheck={this.handleCheck}
        />
      );
    }
}


export default Checkbox;
