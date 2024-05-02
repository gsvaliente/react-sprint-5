# ONBOARDING CARDS INTRODUCTION

This is a React application built using TypeScript and Vite. It displays a step-by-step tutorial/ onboarding using a card-base interface. Users can navigate through the tutorial steps using either the buttons, or clicking on the step indicators.

## Getting Started

1. Install Dependencies

```bash
pnpm install
#or
npm install
#or
yarn install
```

2. Start the development server:

```bash
pnpm dev
# or
npm run dev
# or
yarn run dev
```

3. Open your browser in the localhost provided in the terminal
   For example: http://localhost:5000.

## Features

- Built using React, TypeScript and Vite for fast development and efficient build.
- Uses [TailwindCSS](https://tailwindcss.com/) for styling with the [DaisyUI](https://daisyui.com/) plugin for additional components.
- Includes ESLint for code linting and focusing on React and TypeScript best practices.
- Uses [react-icons](https://www.npmjs.com/package/react-icons) library for scalable vector icons.

## Project Structure

```
├── README.md
├── index.html
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── src
│ ├── App.tsx
│ ├── assets
│ │ └── images
│ │ ├── meditation.svg
│ │ ├── programming.svg
│ │ └── time_managment.svg
│ ├── components
│ │ ├── ArrowButton.tsx
│ │ ├── Card.tsx
│ │ └── Indicator.tsx
│ ├── data
│ │ └── tutorialData.ts
│ ├── index.css
│ ├── main.tsx
│ ├── types
│ │ └── tutorialData.type.ts
│ └── vite-env.d.ts
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Dependencies

```
├── node_modules
│   ├── @eslint
│   ├── @eslint-community
│   ├── @types
│   ├── @typescript-eslint
│   ├── @vitejs
│   ├── autoprefixer
│   ├── daisyui
│   ├── eslint
│   ├── eslint-plugin-react-hooks
│   ├── eslint-plugin-react-refresh
│   ├── eslint-scope
│   ├── eslint-visitor-keys
│   ├── postcss
│   ├── react
│   ├── react-dom
│   ├── react-icons
│   ├── tailwindcss
│   ├── typescript
│   └── vite
```

## Building for Production

To create the production build:

```bash
pnpm run build
```
