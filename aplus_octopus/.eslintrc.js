module.exports = {
  parser: '@typescript-eslint/parser', // 指定ESLint解析器
  extends: [
    //  从@eslint-plugin-react推荐规则
    'plugin:react/recommended',
    // 使用@typescript-eslint/eslint-plugin推荐的规则
    'plugin:@typescript-eslint/recommended',
    // 使用eslint-config-prettier禁用@typescript-eslint/eslint-plugin中的ESLint规则，这些规则会与prettier冲突
    'prettier/@typescript-eslint',
    // 启用eslint-plugin-prettier，并将prettier错误显示为ESLint错误。确保这一项始终在数组的最后一项。
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018, // 允许解析现代ECMAScript特性
    sourceType: 'module', // 允许使用 imports 导入
    ecmaFeatures: {
      jsx: true, // 语序解析JSX
    },
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    // 指定ESLint规则的位置。可以用来覆盖从扩展的配置中指定的规则。
    semi: ['error', 'always'],
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
  },
  settings: {
    react: {
      version: 'detect', // 告诉eslint-plugin-react自动检测要使用的React版本
    },
  },
};
