/**
 * 禁止更改相关配置
 * 不建议使用prettier等相关工具
 * 养成良好代码习惯，从一点一滴做起
 * 以下初始相关配置留存
 */
// module.exports = {
//   root: true,
//   env: {
//     node: true
//   },
//   'globals': {
//     'ccconstants': true,
//     'ccutils': true
//   },
//   'extends': [
//     'plugin:vue/essential',
//     'eslint:recommended'
//   ],
//   parserOptions: {
//     parser: 'babel-eslint'
//   },
//   rules: {
//     'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'warn',
//     'no-debugger': process.env.NODE_ENV === 'production' ? 'off' : 'warn',
//     "no-prototype-builtins": "off",
//     "no-unused-vars": "warn",
//     'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
//     semi: [2, "always"],
//   }
// }
module.exports = {
  root: true,
  env: {
    node: true
  },
  'globals': {
    'ccconstants': true,
    'ccutils': true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'off' : 'warn',
    "no-prototype-builtins": "off",
    "no-unused-vars": "warn",
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    semi: [2, "always"],
  }
}