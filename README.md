# Personal Portfolio Website

This is a personal portfolio website built with [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/). It showcases my projects, skills, and provides a way to get in touch.

## Features

*   **Responsive Design**: Adapts to various screen sizes for a seamless experience on desktop, tablet, and mobile devices.
*   **Modern Tech Stack**: Leverages the power of Next.js for server-side rendering (SSR) or static site generation (SSG), TypeScript for type safety, and Tailwind CSS for utility-first styling.
*   **Key Sections**:
    *   **Hero**: A captivating introduction (see `src/app/components/sections/Hero.tsx`).
    *   **About**: Information about me, my skills, and experience (see `src/app/components/sections/About.tsx`).
    *   **Projects**: A showcase of my work with descriptions and links (see `src/app/components/sections/Projects.tsx`).
    *   **Contact**: A way for visitors to reach out (see `src/app/components/sections/Contact.tsx`).
*   **Optimized Performance**: Built with performance in mind using Next.js features like image optimization and font optimization.
*   **Theme Provider**: Includes a theme provider, potentially for light/dark mode switching (see `src/app/components/ThemeProvider.tsx`).
*   **Page Transitions**: Smooth page transitions for an enhanced user experience (see `src/app/components/PageTransitionWrapper.tsx`).

## Tech Stack

*   **Framework**: [Next.js](https://nextjs.org/) (App Router)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Package Manager**: [Bun](https://bun.sh/) (inferred from `bun.lock`)
*   **Linting**: [ESLint](https://eslint.org/) (inferred from `eslint.config.mjs`)
*   **Font**: [Geist](https://vercel.com/font) (likely used, as per default Next.js setup)

## Project Structure Overview

The project is organized using the Next.js App Router:

```
personal-portfolio/
├── public/                 # Static assets (images, icons like file.svg, globe.svg)
├── src/
│   ├── app/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── sections/   # Page sections (Hero.tsx, About.tsx, Projects.tsx, Contact.tsx)
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── PageTransitionWrapper.tsx
│   │   │   └── ThemeProvider.tsx
│   │   ├── layout.tsx      # Root layout for the application
│   │   ├── page.tsx        # Main landing page content
│   │   └── globals.css     # Global styles, including Tailwind base/components/utilities
│   └── lib/                # Utility functions (e.g., utils.ts)
├── .gitignore
├── bun.lock
├── eslint.config.mjs
├── next.config.ts          # Next.js specific configurations
├── package.json            # Project dependencies and scripts
├── postcss.config.mjs      # PostCSS configuration (often used with Tailwind)
├── README.md               # This file
├── tailwind.config.ts      # Tailwind CSS theme and variant configurations
└── tsconfig.json           # TypeScript compiler options
```

## Getting Started

First, ensure you have [Node.js](https://nodejs.org/) (LTS version recommended) and [Bun](https://bun.sh/) installed.

1.  **Clone the repository** (if you haven't already):
    ```bash
    git clone https://github.com/aryanX23/personal-portfolio.git
    cd personal-portfolio
    ```

2.  **Install dependencies**:
    This project uses Bun (as indicated by `bun.lock`).
    ```bash
    bun install
    ```
    If you prefer other package managers and have the corresponding lock files, you can use:
    ```bash
    # npm install
    # yarn install
    # pnpm install
    ```

3.  **Run the development server**:
    ```bash
    bun run dev
    ```
    Or, depending on your `package.json` scripts:
    ```bash
    # npm run dev
    # yarn dev
    # pnpm dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the main page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Learn More (About Next.js)

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contact

*   **Your Name/Handle**: `[Aryan Rai]`
*   **Email**: `[official@aryan-rai.com]`
*   **Portfolio URL**: `[https://portfolio.aryan-rai.com/]`
*   **GitHub**: `[https://github.com/aryanX23]`
*   **LinkedIn**: `[https://www.linkedin.com/in/aryan-rai-92b184228/]`
