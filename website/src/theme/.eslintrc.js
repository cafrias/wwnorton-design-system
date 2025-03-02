module.exports = {
	ignorePatterns: [
		'NavBar/**',
		'SearchBar/**',
	],
	rules: {
		'import/prefer-default-export': 'error',
		'import/no-default-export': 'off',
		'react/no-array-index-key': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
	},
};
