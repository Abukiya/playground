import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import importPlugin from 'eslint-plugin-import-x'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    settings: {
      'import-x/resolver': {
        typescript: {
          project: './tsconfig.app.json',
        },
      },
    },
    rules: {
      // ---- bulletproof-react folder-boundary enforcement ----
      'import-x/no-restricted-paths': [
        'error',
        {
          zones: [
            // feature-to-feature isolation:
            // a feature can only import from itself, not from siblings
            {
              target: './src/features/contact',
              from: './src/features',
              except: ['./contact'],
            },
            {
              target: './src/features/home',
              from: './src/features',
              except: ['./home'],
            },
            {
              target: './src/features/partners',
              from: './src/features',
              except: ['./partners'],
            },
            {
              target: './src/features/portfolio',
              from: './src/features',
              except: ['./portfolio'],
            },
            {
              target: './src/features/services',
              from: './src/features',
              except: ['./services'],
            },
            {
              target: './src/features/team',
              from: './src/features',
              except: ['./team'],
            },

            // unidirectional flow: app can import features, not the reverse
            {
              target: './src/features',
              from: './src/app',
            },

            // shared modules can be imported by features/app, but can't import them back
            {
              target: [
                './src/components',
                './src/hooks',
                './src/lib',
                './src/types',
                './src/utils',
              ],
              from: ['./src/features', './src/app'],
            },
          ],
        },
      ],
      'import-x/no-cycle': 'error',
      'import-x/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },
])
