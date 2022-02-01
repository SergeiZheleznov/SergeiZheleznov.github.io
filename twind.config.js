import { defineConfig } from '@twind/tailwind';

// `defineConfig` is required as it adds the default tailwind presets
export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Source Code Pro'"],
        body: "'Inconsolata'",
        display: "'Inconsolata'",
      },
    },
  },
  preflight: {
    '@import': `url('https://fonts.googleapis.com/css2?family=Inconsolata&family=Source+Code+Pro:wght@400;600&display=swap')`,
  },
});
