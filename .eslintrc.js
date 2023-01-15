module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  extends: ['alloy', 'alloy/react', 'alloy/typescript'],
  rules: {
      // 自定义你的规则
      'max-params': 'off',
      'jsx-quotes': ['error', 'prefer-single'],
      quotes: ['error', 'single'],
  },
}
