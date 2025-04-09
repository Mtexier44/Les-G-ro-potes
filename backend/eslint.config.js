/** @type {import('eslint').Linter.Config} */
module.exports = [
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        // Variables globales de Node.js
        __dirname: 'readonly',
        __filename: 'readonly',
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        process: 'readonly',
        console: 'readonly',

        // Variables pour Jest (si tu utilises des tests unitaires)
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',

        // Variables de navigateur (si nécessaire)
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
      },
    },
    rules: {
      'no-console': 'off', // Autoriser console.log pour le debug
      'no-unused-vars': 'warn', // Avertir sur les variables inutilisées
    },
  },
];
