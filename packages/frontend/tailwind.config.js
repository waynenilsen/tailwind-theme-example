/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Light shades
        'primary-light': 'color-mix(in srgb, var(--color-primary) 80%, white)',
        'secondary-light': 'color-mix(in srgb, var(--color-secondary) 80%, white)',
        'accent-light': 'color-mix(in srgb, var(--color-accent) 80%, white)',
        'neutral-light': 'color-mix(in srgb, var(--color-neutral) 80%, white)',
        'base-light': 'color-mix(in srgb, var(--color-base) 80%, white)',
        'info-light': 'color-mix(in srgb, var(--color-info) 80%, white)',
        'success-light': 'color-mix(in srgb, var(--color-success) 80%, white)',
        'warning-light': 'color-mix(in srgb, var(--color-warning) 80%, white)',
        'error-light': 'color-mix(in srgb, var(--color-error) 80%, white)',
        
        // Base colors
        'primary': 'var(--color-primary)',
        'secondary': 'var(--color-secondary)',
        'accent': 'var(--color-accent)',
        'neutral': 'var(--color-neutral)',
        'base': 'var(--color-base)',
        'info': 'var(--color-info)',
        'success': 'var(--color-success)',
        'warning': 'var(--color-warning)',
        'error': 'var(--color-error)',
        
        // Dark shades
        'primary-dark': 'color-mix(in srgb, var(--color-primary) 80%, black)',
        'secondary-dark': 'color-mix(in srgb, var(--color-secondary) 80%, black)',
        'accent-dark': 'color-mix(in srgb, var(--color-accent) 80%, black)',
        'neutral-dark': 'color-mix(in srgb, var(--color-neutral) 80%, black)',
        'base-dark': 'color-mix(in srgb, var(--color-base) 80%, black)',
        'info-dark': 'color-mix(in srgb, var(--color-info) 80%, black)',
        'success-dark': 'color-mix(in srgb, var(--color-success) 80%, black)',
        'warning-dark': 'color-mix(in srgb, var(--color-warning) 80%, black)',
        'error-dark': 'color-mix(in srgb, var(--color-error) 80%, black)',
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
      }),
      textColor: (theme) => ({
        ...theme("colors"),
      }),
      borderColor: (theme) => ({
        ...theme("colors"),
      }),
      ringColor: (theme) => ({
        ...theme("colors"),
      }),
      divideColor: (theme) => ({
        ...theme("colors"),
      }),
      placeholderColor: (theme) => ({
        ...theme("colors"),
      })
    },
  },
  plugins: [],
};
