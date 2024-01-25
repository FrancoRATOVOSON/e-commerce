const tailwindcssAnimate = require('tailwindcss-animate')

const plugin = require('tailwindcss/plugin')

const neutral = require('./neutral')
const base = require('./base')
const semantic = require('./semantic')
const plugins = require('./plugins')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  plugins: [
    tailwindcssAnimate,
    plugin(({ addBase, addUtilities, addVariant }) => {
      const { base: bs, utilities } = plugins
      addBase(bs)
      addUtilities(utilities)
      addVariant('on-dark', ':global(.dark) &')
      addVariant('dark-hover', ':global(.dark) &:hover')
    })
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(8, 7, 8, 0.4)'
      },
      colors: {
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        background: 'hsl(var(--background))',
        border: 'hsl(var(--border))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        foreground: 'hsl(var(--foreground))',
        input: 'hsl(var(--input))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        ring: 'hsl(var(--ring))',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        ...neutral,
        ...base,
        ...semantic,
        current: 'currentColor',
        inherit: 'inherit',
        transparent: 'transparent'
      },
      fontFamily: {
        jost: ['"Jost"', 'ui-sans-serif', 'system-ui']
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      spacing: {
        128: '32rem'
      }
    }
  }
}
