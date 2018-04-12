// @flow
import type { PropTypes } from './Button';
import { colors, transition } from '../themes/variables';
import { darken, lighten } from '../fela/color-mixer';

const blueCrush20 = lighten(colors.blueCrush, 20);

export const componentStyle = (props: PropTypes) => {
  const {
    theme = 'default',
    size = '',
    width = '',
    fixedWidth = 220,
    shadow = false,
    text,
    icon,
    color,
    disabled,
    customWidth,
    customHeight,
    fontSize,
    lineHeight,
    noUnderline,
  } = props;
  const themeSwitch = disabled ? 'disabled' : theme;

  const themeColor = () => {
    switch (themeSwitch) {
      case 'primary':
        return colors.mint;
      case 'secondary':
        return colors.blueCrush;
      case 'disabled':
        return colors.grey;
      case 'google':
        return colors.white;
      case 'facebook':
        return colors.facebookBlue;
      case 'square-cta':
        return colors.rose;
      default:
        return colors.dust;
    }
  };

  const themeColorDarken = darken(themeColor(), 35);
  const themeColorLighten = lighten(themeColor(), 35);

  const sizeBig = {
    paddingLeft: 30,
    height: 60,
  };

  const sizeTiny = {
    paddingLeft: 10,
    height: 34,
  };

  const sizeSwitch = size === 'big' ? sizeBig : size === 'tiny' ? sizeTiny : {};
  const widthBlock = {
    display: 'flex',
    width: '100%',
  };

  const widthFixed = {
    width: fixedWidth,
  };

  const widthSwitch =
    width === 'block' ? widthBlock : width === 'fixed' ? widthFixed : {};

  const shadowStyle = shadow
    ? {
        boxShadow: '0 2px 4px 0 rgba(0,0,0,0.5)',
      }
    : {};

  const iconStyle = icon
    ? {
        paddingLeft: size === 'big' ? 60 : size === 'tiny' ? 34 : 44,
      }
    : {};

  const regularTheme = {
    paddingLeft: size === 'big' ? 30 : size === 'tiny' ? 10 : 20,
    paddingRight: text ? (size === 'big' ? 30 : size === 'tiny' ? 10 : 20) : 0,
    height: 44,
    color:
      theme === 'default' || theme === 'google' || theme === 'ghost'
        ? colors.space
        : colors.white,
    backgroundColor: themeColorDarken,

    ':before': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      borderRadius: 6,
      backgroundColor: themeColor(),
    },

    '> .fela-button-icon-wrap': {
      position: 'absolute',
      top: 0,
      left: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size === 'big' ? 60 : size === 'tiny' ? 34 : 44,
      height: '100%',
    },

    onHover: {
      ':before': {
        bottom: 3,
        backgroundColor: themeColorLighten,
      },

      '> .fela-button-text': {
        transform: 'translateY(-2px)',
      },

      '> .fela-button-icon-wrap': {
        transform: 'translateY(-2px)',
      },
    },
    ...sizeSwitch,
    ...widthSwitch,
    ...shadowStyle,
    ...iconStyle,
  };

  const ghostTheme = {
    paddingLeft: 0,
    paddingRight: 0,
    width: text
      ? 'auto'
      : customWidth ? `${customWidth}px` : size === 'big' ? '60px' : '48px',
    height: text
      ? 'auto'
      : customHeight ? `${customHeight}px` : size === 'big' ? '60px' : '48px',

    color: disabled
      ? colors.dust
      : color === 'blue'
        ? colors.blueCrush
        : color === 'blue20'
          ? blueCrush20
          : color === 'white'
            ? colors.white
            : color === 'link' ? colors.rose : colors.space,

    onHover: {
      '> .fela-button-text': {
        textDecoration: noUnderline ? 'none' : 'underline',
      },
    },

    '> .fela-button-icon-wrap': {
      marginRight: text ? 10 : 0,
    },

    '> .fela-button-ghost-default-icon': {
      marginLeft: 5,
      fontSize: 6,
      transform: 'rotate(-90deg)',
    },
  };

  const squareCtaTheme = {
    display: 'flex',
    height: 44,
    fontSize: 16,
    lineHeight: '18px',
    color: colors.white,
    borderRadius: 0,
    backgroundColor: themeColor(),

    onHover: {
      backgroundColor: themeColorDarken,
    },
  };

  const buttonTypeSwitch =
    theme === 'ghost'
      ? ghostTheme
      : theme === 'square-cta' ? squareCtaTheme : regularTheme;

  const defaultStyle = {
    position: 'relative',
    display: 'inline-flex',

    '> .fela-button-text': {
      flexShrink: 0,
      position: 'relative',
      quicksandBold:
        fontSize || (theme === 'square-cta' ? 16 : size === 'big' ? 18 : 14),
      lineHeight:
        lineHeight ||
        (theme === 'square-cta' ? '18px' : size === 'big' ? '18px' : '14px'),
      transition: 'inherit',
    },

    ':focus': {
      outline: 0,
    },
  };

  return {
    ...defaultStyle,
    ...buttonTypeSwitch,
  };
};

export const iconGenericStyle = (props: PropTypes) => {
  const { color, disabled, theme } = props;

  const fillColor = () => {
    if (disabled) return colors.dust;

    if (theme === 'ghost' && color) {
      switch (color) {
        case 'blue':
          return colors.blueCrush;
        case 'blue20':
          return blueCrush20;
        case 'white':
          return colors.white;
        case 'link':
          return colors.rose;
        case 'custom':
          return null;
        default:
          return colors.space;
      }
    }

    return colors.white;
  };

  const style = {
    '> div': {
      '> svg': {
        '> path': {
          fill: fillColor(),
          transition: `fill ${transition.fast} ease-in-out`,
        },
      },
    },
  };

  return style;
};

export const backButtonWrap = (props: PropTypes) => {
  const { text } = props;
  const genericStyle = iconGenericStyle(props);

  const style = {
    ...genericStyle,
    marginLeft: text ? '10px' : 0,
  };

  return style;
};

export default componentStyle;
