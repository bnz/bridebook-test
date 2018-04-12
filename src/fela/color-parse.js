// @flow
import { colors } from '../themes/variables';

const colorParse = (color): string =>
  /^[a-zA-Z]+$/.test(color) ? colors[color] : color;

export default colorParse;
