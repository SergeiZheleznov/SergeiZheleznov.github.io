const path = require('path');
module.exports = {
  purge: {
    enabled: true,
    content: [
      path.join(__dirname, 'site/layouts/', '**/*.html')
    ]
  },
  theme: {
    extend: {},
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/ui'),
  ],
};
