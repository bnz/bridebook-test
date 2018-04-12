import { createRenderer } from 'fela';
import webPreset from 'fela-preset-web';
import friendlyPseudoClass from 'fela-plugin-friendly-pseudo-class';
import placeholderPrefixer from 'fela-plugin-placeholder-prefixer';
// import dynamicPrefixer from 'fela-plugin-dynamic-prefixer';
import unit from './unitPlugin';
import namedMediaQuery from './namedMediaQueryPlugin';
// import beautifier from './beautifyEnhancer';
import customProperty from './customPropertyPlugin';
import embedded from 'fela-plugin-embedded';

const config = {
  selectorPrefix: 'bb-',
  plugins: [
    // dynamicPrefixer(),
    embedded(),
    ...webPreset,
    friendlyPseudoClass(),
    placeholderPrefixer(),
    namedMediaQuery,
    customProperty,
    unit,
  ],
  // enhancers: [beautifier],
};

export default function getRenderer() {
  return createRenderer(config);
}

