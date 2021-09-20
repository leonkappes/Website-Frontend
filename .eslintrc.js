module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  extends: [
    '@nuxtjs'
  ],
  // add your custom rules here
  rules: {
    'vue/html-self-closing': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/html-indent': 'off',
    'vue/max-attributes-per-line': 'off',
    'no-new': 'off',
    'vue/require-component-is': 'off'
  }
}
