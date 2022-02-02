import { defineConfig } from '@twind/tailwind';

// `defineConfig` is required as it adds the default tailwind presets
export default defineConfig({
  darkMode: 'class',
  theme: {
    fontSize: {
      base: '1.8rem',
      lg: '3rem',
    },
    extend: {
      fontFamily: {
        sans: '"Jet Brains Mono", sans-serif',
      },
    },
  },
  preflight: {
    // '@import': `url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap')`,
    '@font-face': [
      {
        fontFamily: 'Jet Brains Mono',
        fontWeight: '400',
        src: 'url(/fonts/JetBrainsMono-Regular.woff2) format("woff")',
      },
      {
        fontFamily: 'Jet Brains Mono',
        fontWeight: '700',
        src: 'url(/fonts/JetBrainsMono-Bold.woff2) format("woff")',
      },
      {
        fontFamily: 'Jet Brains Mono',
        fontWeight: '800',
        src: 'url(/fonts/JetBrainsMono-ExtraBold.woff2) format("woff")',
      },
    ],
  },
});
