module.exports = {
  rules: {
    /* Avoid errors */
    'color-no-invalid-hex': true,
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,
    'named-grid-areas-no-invalid': true,
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-no-unknown': true,
    'string-no-newline': true,
    'unit-no-unknown': true,
    'custom-property-no-missing-var-function': true,
    'property-no-unknown': true,
    'keyframe-declaration-no-important': true,
    'declaration-block-no-duplicate-custom-properties': true,
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'block-no-empty': [
      true,
      {
        ignore: ['comments'],
      },
    ],
    'selector-pseudo-element-no-unknown': true,
    'selector-type-no-unknown': true,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: [ 'global', 'local' ],
      },
    ],
    'media-feature-name-no-unknown': true,
    'at-rule-no-unknown': true,
    'comment-no-empty': true,
    'no-descending-specificity': true,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-invalid-double-slash-comments': true,
    'no-invalid-position-at-import-rule': true,

    /* Enforce conventions */
    'alpha-value-notation': 'number',
    'hue-degree-notation': 'angle',
    'color-function-notation': 'legacy',
    'color-hex-alpha': 'never',
    'color-hex-length': 'short',
    'length-zero-no-unit': true,
    'font-family-name-quotes': 'always-where-recommended',
    'function-url-quotes': 'always',
    'number-max-precision': 2,
    'shorthand-property-no-redundant-values': true,
    'value-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'declaration-block-no-redundant-longhand-properties': true,
    'selector-attribute-quotes': 'always',
    'selector-pseudo-element-colon-notation': 'double',
    'media-feature-name-no-vendor-prefix': true,
    'at-rule-no-vendor-prefix': true,
    'no-irregular-whitespace': true,
    'no-unknown-animations': true,
    'unicode-bom': 'never',

    /* Stylistic issues */
    'value-keyword-case': 'lower',
    'function-name-case': 'lower',
    'custom-property-empty-line-before': 'never',
    'selector-type-case': 'lower',
    'rule-empty-line-before': 'always',
    'at-rule-empty-line-before': 'always',
    'comment-empty-line-before': 'always',
    'comment-whitespace-inside': 'always',
    'color-hex-case': 'lower',
    'number-leading-zero': 'always',
    'number-no-trailing-zeros': true,
    'string-quotes': 'double',
    'unit-case': 'lower',
    'value-list-comma-newline-after': 'never-multi-line',
    'value-list-comma-newline-before': 'never-multi-line',
    'value-list-comma-space-after': 'always',
    'value-list-comma-space-before': 'never',
    'value-list-max-empty-lines': 0,
    'property-case': 'lower',
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-empty-line-before': 'never',
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'declaration-block-trailing-semicolon': 'always',
    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-empty-line-before': 'never',
    'block-opening-brace-newline-after': 'always',
    'block-opening-brace-space-before': 'always',
    'block-closing-brace-newline-before': 'always',
    'selector-list-comma-newline-after': 'always-multi-line',
    'selector-list-comma-newline-before': 'always',
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-case': 'lower',
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'media-query-list-comma-newline-after': 'never-multi-line',
    'media-query-list-comma-newline-before': 'never-multi-line',
    'media-query-list-comma-space-after': 'always',
    'media-query-list-comma-space-before': 'never',
    'at-rule-name-case': 'lower',
    'at-rule-name-space-after': 'always',
    'at-rule-semicolon-space-before': 'never',
    'at-rule-semicolon-newline-after': 'always',
    indentation: 2,
    linebreaks: 'unix',
    'max-empty-lines': 1,
    'max-line-length': 60,
    'no-eol-whitespace': true,
    'no-missing-end-of-source-newline': true,
    'no-empty-first-line': true,
    'no-extra-semicolons': true,
  },
};
