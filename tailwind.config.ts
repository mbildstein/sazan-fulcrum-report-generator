import type { Config } from 'tailwindcss'

export default {
  content: [],
  theme: {
    extend: {
      screens: {
        print: { raw: 'print' },
        screen: { raw: 'screen' },
      },
    },
  },
  plugins: [],
} satisfies Config
