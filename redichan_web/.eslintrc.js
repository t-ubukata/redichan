module.exports = {
 env: {
   browser: true,
   es2021: true,
 },
 extends: [
   'plugin:react/recommended',
   'airbnb',
   'airbnb/hooks',
   'plugin:@typescript-eslint/recommended',
   'plugin:@typescript-eslint/recommended-requiring-type-checking',
   'prettier',
 ],
 parser: '@typescript-eslint/parser',
 parserOptions: {
   ecmaFeatures: {
     jsx: true,
   },
   ecmaVersion: 12,
   sourceType: 'module',
   tsconfigRootDir: __dirname,
   project: ['./tsconfig.json'],
 },
 plugins: [
   'react',
   '@typescript-eslint',
 ],
 "ignorePatterns": [
   ".eslintrc.js"
 ],
 rules: {
   'semi': ['warn', 'always'],
   "react-hooks/exhaustive-deps": "off",
   'no-use-before-define': "off",
   "@typescript-eslint/no-use-before-define": "off",
   'import/prefer-default-export': "off",
   'import/extensions': [
       'error',
       {
         js: 'never',
         jsx: 'never',
         ts: 'never',
         tsx: 'never',
       },
     ],
     'react/jsx-filename-extension': [
       'error',
       {
         extensions: ['.jsx', '.tsx'],
       },
     ],
     'react/react-in-jsx-scope': 'off',
     'no-void': [
       'error',
       {
         allowAsStatement: true,
       },
     ],
     "react/function-component-definition": [
       2,
       {
         "namedComponents": "arrow-function"
       }
     ],
    "@typescript-eslint/no-misused-promises": [2, {
      "checksVoidReturn": {
        "attributes": false
      }
    }],
    'react/jsx-props-no-spreading': 'off'
 },
 settings: {
   'import/resolver': {
     node: {
       paths: ['src'],
       extensions: ['.js', '.jsx', '.ts', '.tsx']
     },
   },
 },
};
