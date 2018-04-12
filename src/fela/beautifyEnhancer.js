// @fela
import beautifier from 'fela-beautifier';

const beautifyEnhancer = beautifier({
  openbrace: 'separate-line',
  autosemicolon: 'false',
  ident: '  ',
});

export default beautifyEnhancer;
