import antfu from '@antfu/eslint-config'

export default antfu(
  {
    type: 'lib',
    typescript: true,
    formatters: false,
    ignores: ['postcss.config.js', 'vite.config.base.js'],
  },
  {
    rules: {
      'ts/no-redeclare': 'off',
      'ts/consistent-type-definitions': ['error', 'type'],
      'no-console': ['warn'],
      'antfu/no-top-level-await': 'off',
      'node/prefer-global/process': 'off',
      'perfectionist/sort-imports': 'off',
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
          ignore: ['README.md', 'App.tsx'],
        },
      ],
    },
  },
)
