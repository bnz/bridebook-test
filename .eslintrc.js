module.exports = {
  extends: ['airbnb', 'plugin:flowtype/recommended'],
  plugins: ['flowtype'],
  parser: 'babel-eslint',
  rules: {
    'arrow-parens': 0, // Does not work with Flow generic types.
    'comma-dangle': 0, // Because some files are still in ES5.
    'import/first': 0, // Este sorts by atom/sort lines natural order.
    'import/prefer-default-export': 0, // Actions can have just one action.
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/no-named-as-default': 0,
    indent: 0, // Prettier.
    'no-confusing-arrow': 0, // This rule is confusing.
    'no-mixed-operators': 0, // Prettier.
    'no-nested-ternary': 0, // Buggy for functional componenents.
    'no-param-reassign': 0, // We love param reassignment. Naming is hard.
    'no-shadow': 0, // Shadowing is a nice language feature. Naming is hard.
    'no-underscore-dangle': 0, // Control freaky.
    'react/jsx-closing-bracket-location': 0, // Prettier.
    'react/jsx-filename-extension': 0, // JSX belongs to .js files.
    'react/jsx-indent': 0, // Prettier.
    'react/jsx-indent-props': 0, // Prettier.
    'react/no-unused-prop-types': 0, // Buggy and we don't need it with Flow.
    'react/prop-types': 0, // We don't need it with Flow.
    'react/react-in-jsx-scope': 0, // Next.js injects it. Should be default.
    'react/require-default-props': 0, // We don't need it with Flow.
    'react/no-danger': 0, // Control freaky.
    'react/forbid-prop-types': 0, // Control freaky.
    'react/sort-comp': 0, // to stop complaiting about props being at top.
    'react/no-find-dom-node': 2, // make error on find-dom-node
    'jsx-a11y/no-static-element-interactions': 0,
    'function-paren-newline': 0, // override with prettier autoformat
    'object-curly-newline': 0, // same prettier over eslint
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: true,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
    ],
  },
  settings: {
    'import/resolver': { 'babel-module': {} },
  },
};
