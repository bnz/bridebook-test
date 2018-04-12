// @flow
import {
  componentStyle,
  backButtonWrap,
  iconGenericStyle,
} from './Button.style';
import type { Node } from 'react';
import React from 'react';
import FelaButton from '../fela/components/Button';
import Box from '../fela/components/Box';

export type PropTypes = {
  name?: string,
  id?: string,
  theme?: string,
  size?: string,
  width?: string,
  fixedWidth?: number,
  shadow?: boolean,
  text?: string | Object,
  icon?: string | Object,
  backIcon?: Object,
  disabled?: boolean,
  onClick?: Function,
  onMouseEnter?: Function,
  type?: string,
  ref?: string | Function,
  color?: string,
  noIcon?: boolean,
  customWidth?: number,
  customHeight?: number,
  fontSize?: string,
  lineHeight?: string,
  style?: Object,
  noUnderline?: boolean,
};

const Button = (props: PropTypes): Node => {
  const {
    name,
    id,
    type,
    disabled,
    onClick,
    onMouseEnter,
    ref,
    text,
    theme,
    icon,
    noIcon,
    backIcon,
    width,
    style,
  } = props;
  const iconRender = () =>
    typeof icon === 'string' ? (
      <i className={`icon ${icon}`} />
    ) : (
      <Box style={iconGenericStyle(props)}>{icon}</Box>
    );

  const felaButtonStyle = {
    ...componentStyle(props),
    ...style,
  };

  return (
    <FelaButton
      data-name={name}
      id={id}
      type={type}
      disabled={disabled}
      onPress={onClick}
      ref={ref}
      style={felaButtonStyle}
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      width={width}
      borderRadius={6}
      {...{ onMouseEnter }}>
      {icon && <div className="fela-button-icon-wrap">{iconRender()}</div>}
      <div className="fela-button-text">{text}</div>
      {!noIcon &&
        theme === 'ghost' &&
        !icon &&
        !backIcon && (
          <i className="fela-button-ghost-default-icon icon icon-fat-chevron ghost-chevron" />
        )}
      {theme === 'ghost' &&
        backIcon &&
        !noIcon && (
          <div className="fela-button-back-icon-wrap">
            <Box style={backButtonWrap(props)}>{backIcon}</Box>
          </div>
        )}
    </FelaButton>
  );
};

export default Button;
