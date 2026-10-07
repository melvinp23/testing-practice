// import js from '@eslint/js';
// import globals from 'globals';
// import { defineConfig } from 'eslint/config';

// export default defineConfig([
// 	{
// 		files: ['**/*.{js,mjs,cjs}'],
// 		plugins: { js },
// 		extends: ['js/recommended'],
// 		languageOptions: { globals: globals.node },
// 	},
// 	{ files: ['**/*.js'], languageOptions: { sourceType: 'module' } },
// 	{
// 		rules: {
// 			'no-unused-vars': 'warn',
// 			'no-undef': 'warn',
// 		},
// 	},
// ]);

// eslint.config.js
import jest from 'eslint-plugin-jest';
import globals from 'globals';

export default [
	// ...your other project configs
	{
		// Apply these settings only to your test files
		files: ['**/__tests__/**/*', '**/*.{test,spec}.{js,ts,jsx,tsx}'],
		plugins: {
			jest,
		},
		languageOptions: {
			globals: {
				...globals.jest, // Adds Jest global variables like `test`, `expect`, `describe`
			},
		},
		rules: {
			...jest.configs['flat/recommended'].rules, // Enables standard Jest rules
			'jest/no-disabled-tests': 'warn', // Custom override example
		},
	},
];
