# Expanding Cards Application

This is a simple web application built using **Next.js** and **TypeScript**, designed to demonstrate beginner-level HTML, CSS, and JavaScript (enhanced with React components and TypeScript types). The application allows users to click on an image card, which will expand the selected card while contracting all other cards.

## How It Works

- The page displays five image cards with labels like "Parking Lot," "Traffic," etc.
- When a user clicks on a card, the selected card expands, showing more of the image.
- All other cards automatically contract, ensuring only one card is expanded at a time.
- The application is fully responsive and works seamlessly on mobile and desktop.

## Technologies Used

- **Next.js**: A React-based framework for building fast, optimized web applications with static site generation and server-side rendering.
- **TypeScript**: A superset of JavaScript that adds static typing for improved code quality and development experience.
- **HTML & CSS**: Defines the structure and visual styling of the application.
- **JavaScript/TypeScript**: Adds interactivity for expanding and contracting the image cards.

## Setup Instructions

1. Clone or download the project files to your local machine.
2. Install dependencies using `npm install` or `yarn install`.
3. Run the project locally with `npm run dev` or `yarn dev`.
4. Open the app in your browser at `http://localhost:3000`.
5. Click on any card to see the expand/contract functionality in action.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
