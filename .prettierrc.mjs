/** @type {import("prettier").Config} */

export default {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  tabWidth: 2,
  useTabs: false,
  semi: false,
  bracketSpacing: true,
  trailingComma: 'es5',
  singleQuote: true,
}
