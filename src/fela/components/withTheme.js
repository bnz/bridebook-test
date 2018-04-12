// @flow
import type { ComponentType } from 'react';
import type { Theme } from '../../themes/bridebookTypes';
import PropTypes from 'prop-types';

export type ThemeContext = { theme: Theme };

const withTheme = (Component: ComponentType<*>): ComponentType<*> => {
  // $FlowFixMe
  Component.contextTypes = {
    // $FlowFixMe
    ...Component.contextTypes,
    theme: PropTypes.object,
  };
  return Component;
};

export default withTheme;
