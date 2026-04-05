# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Critical: Next.js 16 Breaking Changes

This project uses **Next.js 16.2.2** with **React 19** — APIs, conventions, and file structure may differ from your training data. **Read the relevant guide in `node_modules/next/dist/docs/` before writing any code.** Heed deprecation notices. Key docs paths:
- App Router guides: `node_modules/next/dist/docs/01-app/`
- API reference: `node_modules/next/dist/docs/01-app/03-api-reference/`
- Config reference: `node_modules/next/dist/docs/01-app/03-api-reference/05-config/`

## Commands

- **Dev server:** `npm run dev` (runs on http://localhost:3000)
- **Build:** `npm run build`
- **Start production:** `npm run start`
- **Lint:** `npm run lint` (ESLint 9 flat config with next/core-web-vitals + next/typescript)

No test framework is configured yet.

## Architecture

- **Framework:** Next.js 16 App Router (no Pages Router)
- **Styling:** Tailwind CSS v4 via `@tailwindcss/postcss` plugin — uses `@import "tailwindcss"` and `@theme inline` syntax in `app/globals.css`, not the v3 `@tailwind` directives
- **Fonts:** Geist Sans + Geist Mono loaded via `next/font/google`, exposed as CSS variables `--font-geist-sans` and `--font-geist-mono`
- **Path alias:** `@/*` maps to project root (configured in `tsconfig.json`)
- **TypeScript:** Strict mode enabled
- **ESLint:** Flat config format (`eslint.config.mjs`), not legacy `.eslintrc`
