import type {Config} from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        coinup: {
          'primary': '#003b72',
          'secondary': '#37055a',
          'accent': '#051964',
          'neutral': '#eef0fc',
          'base-100': '#eef0fc',
          'base-200': '#e3e3e8',
          'base-300': '#dbdbdf',
          'info': '#67e8f9',
          'success': '#0cff96',
          'warning': '#ffc900',
          'error': '#ff3e6b',
        },
      },
    ],
    darkTheme: 'dark',
    base: true,
    styled: true,
    utils: true,
    prefix: '',
    logs: true,
    themeRoot: ':root',
  },
}
export default config
