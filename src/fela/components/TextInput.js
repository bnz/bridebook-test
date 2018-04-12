// @flow
import React, { type Element, Component } from 'react';
import Box from './Box';
import Text, { type TextProps } from './Text';
import withTheme from './withTheme';

// Universal text input component. By default, it looks like editable text.
// For underline or the other effects, make a new component. Check TextInputBig.
// TODO: Multiline and rows. Use content editable rather because of links?

export type PropTypes = {
  disabled?: boolean,
  error?: string | Element<any>,
  label?: string | Element<any>,
  maxLength?: number,
  onChange?: (text: string) => void,
  onSubmitEditing?: () => void,
  ref?: Function,
} & TextProps;

// Like Twitter.
const defaultMaxLength = 140;

class TextInput extends Component<PropTypes> {
  render() {
    const {
      error,
      label,
      maxLength = defaultMaxLength,
      onChange,
      onSubmitEditing,
      size = 0,
      style,
      ref,
      ...restProps
    } = this.props;

    const reactNativeEmulation = restProps.isReactNative
      ? null
      : {
          backgroundColor: 'transparent',
          outline: 'none',
        };

    return (
      <Box>
        <Text
          as="input"
          size={size}
          maxLength={maxLength}
          ref={ref}
          {...(onChange
            ? {
                onChange: (e: { currentTarget: HTMLInputElement }) =>
                  onChange(e.currentTarget.value),
              }
            : null)}
          {...(onSubmitEditing
            ? {
                onKeyDown: (e: SyntheticKeyboardEvent<>) => {
                  if (e.key !== 'Enter') return;
                  onSubmitEditing();
                },
              }
            : null)}
          {...(restProps.disabled ? { opacity: 0.5 } : null)}
          {...restProps}
          style={{
            ...reactNativeEmulation,
            ...style,
          }}
        />
      </Box>
    );
  }
}

withTheme(TextInput);

export default TextInput;
