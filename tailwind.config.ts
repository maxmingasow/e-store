/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'
import animatePlugin from 'tailwindcss-animate'

import shadcnPlugin from './lib/shadcn-plugin'

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  plugins: [animatePlugin, shadcnPlugin],
} satisfies Config

export default config
