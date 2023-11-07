import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      color: {
        brightGray: "#4E4E50",
        darkerGray: "#232323",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"]
      }
    },
  },
  plugins: [],
}
export default config
