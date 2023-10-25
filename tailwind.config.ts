// Importing tailwindCSS configs
import type { Config } from 'tailwindcss'

// Defining configs of tailwindCSS
const config: Config = {
  content: [
      './app/*.{tsx,jsx,js,ts}',
      './app/**/*.{tsx,jsx,js,ts}',
      './app/**/**/*.{tsx,jsx,js,ts}',
      './component/*.{tsx,jsx,js,ts}',
      './component/**/*.{tsx,jsx,js,ts}',
      './chunk/*.{tsx,jsx,js,ts}',
      './chunk/**/*.{tsx,jsx,js,ts}',
  ],
  theme: {
      extend: {
          colors: {
              "theme-color": '#7552c5'
          }
      }
  },
  plugins: [],
}

// Exporting the configs
export default config;
