/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: 'rgb(var(--brand) / <alpha-value>)',
        primary: 'rgb(var(--primary) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        success: 'rgb(var(--success) / <alpha-value>)',
        layer3: 'rgb(var(--layer3) / <alpha-value>)',
        layer4: 'rgb(var(--layer4) / <alpha-value>)',
        layer5: 'rgb(var(--layer5) / <alpha-value>)',
      },
      spacing: {
        '4.5': '1.125rem',
        15: '3.75rem',
      },
    },
  },
  plugins: [],
} 