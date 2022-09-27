module.exports = {
  'extends': '@szchason/stylelint-config-css',
  customSyntax: 'postcss-scss',
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        ignoreAtRules: [ 'else', 'if' ],
      },
    ],
    'block-closing-brace-newline-after': [ 'always', [ 'if', 'else' ] ],
    /* @-each */
    'scss/at-each-key-value-single-line': true,
    /* @-else */
    'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-else-closing-brace-space-after': 'never-intermediate',
    'scss/at-else-empty-line-before': 'never',
    'scss/at-else-if-parentheses-space-before': 'always',
    /* @-function */
    'scss/at-function-named-arguments': [
      'always',
      {
        ignore: ['single-argument'],
      },
    ],
    'scss/at-function-parentheses-space-before': 'always',
    /* @-if */
    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-if-closing-brace-space-after': 'never-intermediate',
    /* @-import */
    'scss/at-import-partial-extension': 'always',
    /* @-mixin */
    'scss/at-mixin-argumentless-call-parentheses': 'always',
    'scss/at-mixin-named-arguments': [
      'always',
      {
        ignore: ['single-argument'],
      },
    ],
    'scss/at-mixin-parentheses-space-before': 'always',
    /* @-rule */
    'scss/at-rule-conditional-no-parentheses': true,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    /* @-use */
    'scss/at-use-no-unnamespaced': true,
    /* @-variable */
    'scss/dollar-variable-colon-space-after': 'always',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-first-in-block': [
      true,
      {
        ignore: [ 'comments', 'imports' ],
      },
    ],
    /* Comment */
    'comment-no-empty': null,
    'scss/comment-no-empty': true,
    /* Map */
    'scss/map-keys-quotes': 'always',
    /* Operator */
    'scss/operator-no-newline-after': true,
    'scss/operator-no-newline-before': true,
    'scss/operator-no-unspaced': true,
    /* General / Sheet */
    'scss/no-duplicate-dollar-variables': [
      true,
      {
        ignoreInside: [ 'at-rule', 'nested-at-rule' ],
        ignoreDefaults: true,
      },
    ],
    'scss/no-duplicate-mixins': true,
  },
};
