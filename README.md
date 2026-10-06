# Portfolio

A minimal, single-page portfolio for Shaon An Nafi, built with React, Vite, and Tailwind CSS v4.

## Features

- Minimal single-column layout with a dark theme
- Space Mono typography throughout
- Smooth scrolling (Lenis) with subtle scroll-in motion (Motion)
- Curated project archive with hover-revealed categories
- Live GitHub stats in the footer, cached in `localStorage` with a fallback
- Responsive from small phones up to desktop

## Tech Stack

- React 19
- Vite 6
- Tailwind CSS v4
- Motion
- Lenis
- React Router
- React Icons

## Getting Started

```bash
bun install
bun run dev
```

## Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `bun run dev`     | Start the dev server                 |
| `bun run build`   | Build for production                 |
| `bun run preview` | Preview the production build         |
| `bun run lint`    | Check formatting and lint (Biome)    |
| `bun run format`  | Format and apply fixes (Biome)       |

## Folder Structure

```
.
├── public
│   └── resume.pdf
├── src
│   ├── components
│   │   ├── home        # Hero, About
│   │   ├── layout      # Footer
│   │   ├── projects    # Projects section and row
│   │   └── ui          # Shared primitives
│   ├── constants       # Site config and links
│   ├── data            # Project list
│   ├── hooks           # useGitHub
│   ├── pages           # Home, Experience, 404
│   ├── index.css       # Design tokens and theme
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── vite.config.js
└── package.json
```
