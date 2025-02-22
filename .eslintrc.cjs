export default {
  root: true,
  env: {
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended', // Use 'plugin:vue/recommended' for Vue 2
    'plugin:prettier/recommended'
  ],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }]
  }
};
