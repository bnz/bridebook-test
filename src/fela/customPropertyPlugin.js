import customProperty from 'fela-plugin-custom-property';
import { fonts } from '../themes/variables';

const quicksandBoldMixin = fontSize => ({
  fontFamily: fonts.quicksand,
  fontWeight: '600',
  WebkitFontSmoothing: 'antialiased',
  fontSize: fontSize || null,
});

const systemFontsMixin = fontSize => ({
  fontFamily: fonts.system,
  WebkitFontSmoothing: 'antialiased',
  fontSize: fontSize || null,
});

const transitionFastMixin = prop => ({
  fontFamily: `${prop} 0.15s ease-in-out`,
});

const transitionSlowMixin = prop => ({
  fontFamily: `${prop} 0.6s ease-in-out`,
});

export const customPropertyPlugin = customProperty({
  quicksandBold: quicksandBoldMixin,
  systemFont: systemFontsMixin,
  transitionFast: transitionFastMixin,
  transitionSlow: transitionSlowMixin,
});

export default customPropertyPlugin;
