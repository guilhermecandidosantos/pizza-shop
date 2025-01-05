import config from '@rocketseat/eslint-config/react.mjs'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

export default [
  ...config,
  eslintPluginPrettierRecommended,
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: false,
          endOfLine: 'auto',
        },
      ],
    },
  },
]
