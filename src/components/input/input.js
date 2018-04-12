// @flow
import ComponentStyles from './input.style';
import React, { Component } from 'react';
import Box from '../../fela/components/Box';
import TextInput from '../../fela/components/TextInput';
import Button from '../Button';
import { lighten } from '../../fela/color-mixer';
import { colors } from '../../themes/variables';
import Label from '../Label';

export type PropTypes = {
  type?: string,
  label?: string | Object,
  id?: string,
  required?: boolean,
  autoFocus?: boolean,
  disabled?: boolean,
  setRef?: Function,
  onChange?: Function,
};

type StateTypes = {|
  inputValue: string | number,
|};

class Input extends Component<PropTypes, StateTypes> {
  constructor(props: PropTypes) {
    super(props);

    this.state = {
      inputValue: props.value || '',
    };
  }

  componentWillReceiveProps(nextProps) {
    const { value } = this.props;

    if (value !== nextProps.value) {
      this.setState({ inputValue: nextProps.value });
    }
  }

  onChangeSet = value => {
    const { name } = this.props;
    const { onChange } = this.props;

    this.setState({ inputValue: value });
    if (onChange) onChange({ target: { name, value } });
  };

  render() {
    const {
      label,
      id,
      required = false,

      value,
      onChange,
      type,
      pattern,
      disabled,
      setRef,
      ...props
    } = this.props;

    const { inputValue } = this.state;
    const space60 = lighten(colors.space, 60);
    const space70 = lighten(colors.space, 70);
    const styles = ComponentStyles(this.props);

    const setPattern = pattern || type === 'number' ? '\\d*' : '';

    return (
      <Box style={styles.wrapper}>
        <Label {...{ id, label, required, disabled }} />
        <Box style={styles.inputWrapper}>
          <TextInput
            {...{ ...props, id, type, disabled }}
            style={styles.input}
            onChange={this.onChangeSet}
            pattern={setPattern}
            value={inputValue}
            ref={setRef}
          />
        </Box>
      </Box>
    );
  }
}

export default Input;
