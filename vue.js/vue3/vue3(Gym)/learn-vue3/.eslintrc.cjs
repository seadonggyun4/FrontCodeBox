/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,
	parserOptions: {
		ecmaVersion: '2022',
		sourceType: 'module',
	},
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-prettier',
	],
	env: {
		'vue/setup-compiler-macros': true,
	},
	rules: {
		'no-console': 'off',
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				semi: true,
				useTabs: true,
				tabWidth: 2,
				trailingComma: 'all',
				printWidth: 80,
				bracketSpacing: true,
				arrowParens: 'avoid',
				endOfLine: 'auto',
			},
		],
		'vue/multi-word-component-names': [
			'error',
			{
				ignores: [],
			},
		],
	},
};
