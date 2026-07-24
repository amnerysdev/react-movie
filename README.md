# React Movie Search

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Tests](https://img.shields.io/badge/tests-passing-brightgreen)

A portfolio-ready React + Vite movie discovery app that uses The Movie Database (TMDB) API and Appwrite for search analytics.

## Features ✨

- Debounced movie search with live TMDB results
- Trending movies calculated from Appwrite search counts
- Responsive UI with loading, empty, and error states
- Modular service and API handling
- Build/test workflow for GitHub CI

## Tech stack 🧰

- React 19
- Vite
- Tailwind CSS
- Appwrite
- TMDB API
- Vitest + Testing Library

## Getting started 🚀

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

## Environment variables 🔐

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_ENDPOINT=https://your-appwrite-endpoint
VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
VITE_APPWRITE_TABLE_ID=your_appwrite_table_id
```

## Testing 🧪

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

## Deployment 🚢

This application works well on Vercel, Netlify, or Appwrite Hosting.

1. Push the repo to GitHub.
2. Add your `.env` values as environment variables in the hosting provider.
3. Use `npm run build` as the production build command.

## Demo 🎬

![App screenshot](./screenshot.png)

Add a screenshot or GIF of the app here once you have one available.

## Project overview 📝

This app is a React + Vite movie discovery experience that integrates:

- TMDB for movie search and popular titles
- Appwrite for storing search analytics and trending data
- Tailwind CSS for modern styling
- Vitest for test coverage and CI validation

The main page provides a debounced search flow, loading state, and trending recommendations based on user activity.
