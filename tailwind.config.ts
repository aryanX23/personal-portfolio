import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // For pages and layout in app directory
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}", // For components
    // If you have other top-level directories with components, add them too.
    // e.g. "./src/components/**/*.{js,ts,jsx,tsx,mdx}" if you had a general src/components
  ],
  theme: {
    extend: {
      colors: {
        // Example: Adding custom colors if needed
        // 'brand-blue': '#0070f3',
      },
      fontFamily: {
        // Example: If using custom fonts not handled by next/font directly in Tailwind
        // sans: ['var(--font-inter)', 'sans-serif'], // Assuming --font-inter is set up
      },
      // Add any other theme extensions here
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    // Add any Tailwind plugins here
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
  ],
};
export default config;
