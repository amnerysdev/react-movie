# 𝄞⨾𓍢ִ໋⋆🎞️ 𖥔 ݁ ˖ React Movie Search

This application is a React + Vite movie discovery platform that integrates TMDB to search for movies and display popular titles, Appwrite to store search analytics and generate trending recommendations, Tailwind CSS for a modern and responsive user interface, and Vitest to ensure code quality through test coverage and continuous integration validation. The main page features a debounced search experience, loading states for a smoother user experience, and personalized trending recommendations based on user search activity.

## ✨ Features 

- Debounced movie search with live TMDB results
- Trending movies calculated from Appwrite search counts
- Responsive UI with loading, empty, and error states
- Modular service and API handling
- Build/test workflow for GitHub CI

## 🧰 Tech stack 

- **[Appwrite](https://appwrite.io/)** is an open-source Backend-as-a-Service (BaaS) platform that provides developers with a set of APIs to manage authentication, databases, storage, and more, enabling rapid development of secure and scalable applications.

- **[React.js](https://react.dev/reference/react)** is a JavaScript library developed by Meta for building user interfaces. It allows developers to create reusable UI components that manage their own state, leading to more efficient and predictable code. React is widely used for developing single-page applications (SPAs) due to its virtual DOM that improves performance and ease of maintenance.

- **[React-use](https://github.com/streamich/react-use)** is a collection of essential React hooks that simplify common tasks like managing state, side effects, and lifecycle events, promoting cleaner and more maintainable code in React applications.

- **[Tailwind CSS](https://tailwindcss.com/)** is a utility-first CSS framework that provides low-level utility classes to build custom designs without writing custom CSS, enabling rapid and responsive UI development.

- **[Vite](https://vite.dev/)** is a modern build tool that provides a fast development environment for frontend projects. It offers features like hot module replacement (HMR) and optimized builds, enhancing the development experience and performance.

## 🚀 Getting started 

1. Install dependencies

```bash
npm install
```

2. Copy env example

```bash
cp .env.example .env
```

3. Fill your environment variables in `.env`

4. Start the development server

```bash
npm run dev
```

5. Build the app

```bash
npm run build
```

## 🔐 Environment variables 

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_ENDPOINT=https://your-appwrite-endpoint
VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
VITE_APPWRITE_TABLE_ID=your_appwrite_table_id
```

## 🧪 Testing 

- Run tests locally:

```bash
npm test
```

- Run tests in CI mode:

```bash
npm run test:run
```

- Generate coverage:

```bash
npm run coverage
```

## 🚢 Deployment 

This application works well on Vercel, Netlify, or Appwrite Hosting.

1. Push the repo to GitHub.
2. Add your `.env` values as environment variables in the hosting provider.
3. Use `npm run build` as the production build command.

## Demo 🎬

<img width="1440" height="2274" alt="app" src="https://github.com/user-attachments/assets/0721fdfa-fcef-4fdf-b14d-92d19178067e" />




