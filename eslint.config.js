import astro from 'eslint-plugin-astro';
import a11y from 'eslint-plugin-jsx-a11y';

export default [
  {
    files: ['**/*.astro'],
    plugins: {
      astro,
      'jsx-a11y': a11y
    },
    rules: {
      'astro/no-unused-css-selector': 'warn',
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/anchor-has-content': 'error'
    }
  }
];
