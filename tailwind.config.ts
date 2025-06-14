import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Light Mode Colors - Refined for better visibility and aesthetics
        background: '#F9FAFB', // Soft off-white
        foreground: '#1F2937', // Dark gray for text
        card: '#FFFFFF',       // White for cards
        border: '#E5E7EB',     // Light gray for borders

        dark: {
          background: '#000000', // True black background
          foreground: '#E5E5E5', // Light gray for text
          card: '#111111',       // Slightly lighter dark gray for card backgrounds
          border: '#2D2D2D',     // Subtle border color
        },
        
        'gradient-from': '#7545f9',
        'gradient-via': '#c43998',
        'gradient-to': '#fe5325',
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'sans-serif'], // Using Manrope via CSS variable
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],    // 12px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }], // 14px
        'base': ['1rem', { lineHeight: '1.5rem' }],     // 16px
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],// 18px
        'xl': ['1.25rem', { lineHeight: '1.75rem' }], // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],    // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],// 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],  // 36px
        '5xl': ['3rem', { lineHeight: '1' }],        // 48px
        '6xl': ['3.75rem', { lineHeight: '1' }],       // 60px
      },
      spacing: {
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "brand-gradient": "linear-gradient(90deg, #7545f9, #c43998, #fe5325)",
      },
    },
  },
  plugins: [],
};
export default config;
