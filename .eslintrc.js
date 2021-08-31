const { resolve } = require('path')
const vuePackageJSON = require('./node_modules/vue/package.json')

module.exports = {
	root: true,
	// `parser: 'vue-eslint-parser'` is already included with any 'plugin:vue/**' config and should be omitted
	parserOptions: {
		// Needed to make the parser take into account 'vue' files
		extraFileExtensions: ['.vue'],
		parser: '@typescript-eslint/parser',
		project: resolve(__dirname, './tsconfig.json'),
		tsconfigRootDir: __dirname,
		ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
		sourceType: 'module', // Allows for the use of imports
	},
	env: {
		browser: true,
	},
	// Rules order is important, please avoid shuffling them
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:vue/vue3-essential', // Priority A: Essential (Error Prevention)
		'plugin:vue/vue3-strongly-recommended', // Priority B: Strongly Recommended (Improving Readability)
		'plugin:vue/vue3-recommended', // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)
		'standard',
	],
	plugins: [
		// required to apply rules which need type information
		'@typescript-eslint',
		'vue',
	],
	globals: {
		ga: 'readonly', // Google Analytics
		cordova: 'readonly',
		__statics: 'readonly',
		__QUASAR_SSR__: 'readonly',
		__QUASAR_SSR_SERVER__: 'readonly',
		__QUASAR_SSR_CLIENT__: 'readonly',
		__QUASAR_SSR_PWA__: 'readonly',
		process: 'readonly',
		Capacitor: 'readonly',
		chrome: 'readonly',
	},
	rules: {
		// allow async-await
		'generator-star-spacing': 'off',
		'import/first': ['warn', 'absolute-first'],
		'import/named': 'error',
		'import/namespace': 'error',
		'import/default': 'error',
		'import/export': 'error',
		// 'import/extensions': 'off',
		// 'import/no-unresolved': 'off',
		'import/no-extraneous-dependencies': 'off',
		'no-use-before-define': 'off',

		// Style
		'no-tabs': 'off',
		'indent': ['warn', 'tab', { 'SwitchCase': 1 }],
		'comma-dangle': ['warn', 'always-multiline'],
		'space-before-function-paren': ['warn', {
			'anonymous': 'always',
			'named': 'never',
			'asyncArrow': 'always',
		}],
		'quotes': ['warn', 'single', {
			'avoidEscape': true,
			'allowTemplateLiterals': true,
		}],
		'quote-props': ['warn', 'consistent'],
		'spaced-comment': 'off',
		'no-irregular-whitespace': 'off',
		'no-trailing-spaces': ['warn'],

		// Vue
		'vue/html-button-has-type': 'error',
		'vue/no-unsupported-features': ['error', { 'version': vuePackageJSON.version }],
		'vue/v-for-delimiter-style': ['warn', 'in'],
		'vue/html-indent': ['warn', 'tab', {
			'attribute': 1,
			'baseIndent': 0,
			'closeBracket': 0,
			'alignAttributesVertically': true,
			'ignores': [],
		}],
		'vue/no-v-html': 'off',
		'vue/html-quotes': ['warn', 'single', { 'avoidEscape': false }],

		// TypeScript
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/indent': ['warn', 'tab'],
		'@typescript-eslint/member-delimiter-style': ['warn', {
			'multiline': { 'delimiter': 'none' },
			'singleline': { 'delimiter': 'comma' },
		}],
		'@typescript-eslint/array-type': ['warn', {
			'default': 'array-simple',
			'readonly': 'array-simple',
		}],
		'@typescript-eslint/prefer-for-of': ['warn'],
		'@typescript-eslint/prefer-includes': ['warn'],
		'@typescript-eslint/prefer-nullish-coalescing': ['warn'],
		'@typescript-eslint/prefer-optional-chain': ['warn'],
		'@typescript-eslint/prefer-string-starts-ends-with': ['warn'],
		'@typescript-eslint/promise-function-async': ['warn'],
		'@typescript-eslint/require-array-sort-compare': ['warn'],
		'@typescript-eslint/type-annotation-spacing': ['warn'],
		'@typescript-eslint/object-curly-spacing': ['warn', 'always'],

		// allow debugger during development only
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
	},
}
