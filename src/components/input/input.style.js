// @flow
import type { PropTypes } from './input';
import type { FelaCSS } from '../../fela/flowtypes';
import { colors } from '../../themes/variables';
import { alpha, darken, lighten } from '../../fela/color-mixer';

const styles = (props: PropTypes, showReset: boolean, hasError: boolean) => {
  const { disabled, icon, backIcon, readOnly, iconWidth = 10 } = props;
  const style: FelaCSS = {};
  const darkenBlue = darken(colors.blueCrush, 20);
  const shadowColor = alpha(darkenBlue, 20);
  const space60 = lighten(colors.space, 60);
  const space70 = lighten(colors.space, 70);
  const space96 = lighten(colors.space, 96);
  const iconSpace = `${19 + iconWidth}px`;

  style.wrapper = {
    position: 'relative',
  };

  const shadowStyle: FelaCSS = {
    boxShadow: disabled ? null : `2px 2px 4px 0 ${shadowColor}`,
  };

  style.inputWrapper = {
    position: 'relative',
  };

  style.input = {
    paddingLeft: icon ? iconSpace : '13px',
    paddingRight:
      showReset && backIcon
        ? '85px'
        : backIcon ? '41px' : showReset ? '44px' : '13px',
    height: '44px',
    width: '100%',
    systemFont: 16,
    color: disabled ? space70 : colors.space,
    lineHeight: '20px',
    fontWeight: '400',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: hasError ? colors.amber : space60,
    borderRadius: '4px',
    boxSizing: 'border-box',
    opacity: 1,
    backgroundColor: disabled ? space96 : colors.white,
    cursor: readOnly ? 'default' : 'initial',
    WebkitAppearance: 'none',

    ':disabled': {
      WebkitTextFillColor: space70, // safari text-color fix
      borderColor: space60,
    },

    ':read-only': {
      userSelect: 'none',
      color: space70,
    },

    '::placeholder': {
      color: space70,
    },

    '::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
    },

    '::-webkit-outer-spin-button': {
      WebkitAppearance: 'none',
    },

    ':hover': {
      ...shadowStyle,
    },

    ':active': {
      outline: '0px',
      WebkitAppearance: 'none',
    },

    ':focus': {
      ...shadowStyle,
      borderColor: hasError ? colors.amber : darkenBlue,
      outline: '0px',
      WebkitAppearance: 'none',
    },
  };

  const iconWrapGeneric = {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    justifyContent: 'center',
    pointerEvents: 'none',
  };

  style.iconWrap = {
    ...iconWrapGeneric,
    alignItems: 'flex-start',
    paddingLeft: '12px',
    left: 0,
    height: '44px',
    width: iconSpace,
  };

  style.backIconWrap = {
    ...iconWrapGeneric,
    alignItems: 'center',
    right: 0,
    height: '44px',
    width: '41px',
    backgroundColor: disabled
      ? space60
      : hasError ? colors.amber : colors.blueCrush,
    borderTopRightRadius: '4px',
    borderBottomRightRadius: '4px',
  };

  style.resetWrap = {
    ...iconWrapGeneric,
    zIndex: 1,
    right: backIcon ? '42px' : 0,
    top: '1px',
    height: '42px',
    width: '42px',
  };

  return style;
};

export default styles;
