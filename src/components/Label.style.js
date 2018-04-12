// @flow
import type { PropTypes } from './label';
import type { FelaCSS } from '../fela/flowtypes';
import { colors } from '../themes/variables';
import { alpha } from '../fela/color-mixer';
import colorParse from '../fela/color-parse';

const styles = (props: PropTypes) => {
  const { disabled, error, color } = props;
  const space50 = alpha(colors.space, 50);
  const fontColor = color ? colorParse(color) : colors.space;

  const style: FelaCSS = {};

  style.labelWrapper = {
    flexShrink: 0,
    flexDirection: 'row',
    marginBottom: '8px',
    systemFont: 14,
    lineHeight: '20px',
    fontWeight: 600,
    color: disabled ? space50 : fontColor,
  };

  style.labelRequired = {
    marginLeft: '2px',
    color: disabled ? space50 : error ? colors.amber : fontColor,
  };

  return style;
};

export default styles;
