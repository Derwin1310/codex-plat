# Repository Guidelines

## Project Structure & Module Organization

This repository is currently a product-definition starter for **AI Radar**. At present, `README.md` is the source of truth for product scope and planned technology; no application, test, or asset directories exist yet. Do not assume files, services, or commands have been added until they are present in the repository.

As implementation begins, keep the intended boundaries clear:

- `src/` for reusable domain modules and browser code.
- `test/` for `node:test` suites, mirroring the source area under test.
- `fixtures/` for deterministic local input data and `snapshots/` for approved outputs.
- `public/` for static UI assets when a dashboard is introduced.
- `scripts/` for local Node.js automation and the `airadar` CLI entry point.

## Build, Test, and Development Commands

There are no runnable build, test, lint, or development commands in this starter. Add documented scripts before relying on them. Once `package.json` exists, expose stable commands such as `npm test` for unit tests and `npm run dev` for the local dashboard; keep their behavior described in the README or package scripts.

Avoid adding framework tooling unless it supports a concrete product need. The planned baseline is HTML, CSS, JavaScript, Node.js scripts, and local fixtures.

## Coding Style & Naming Conventions

Use modern JavaScript modules with two-space indentation, semicolons, and descriptive names. Name files by responsibility in kebab-case, such as `signal-ranker.js` and `source-normalizer.js`; use `camelCase` for functions and variables, and `PascalCase` only for constructors or classes.

Keep domain logic independent of browser rendering and external services. Prefer small, pure functions that accept normalized data and return explicit results.

## Testing Guidelines

Use the built-in `node:test` framework for domain behavior. Put tests in `test/` and name them after the subject, for example `test/signal-ranker.test.js`. Test ranking, deduplication, normalization, and edge cases with local fixtures before integrating remote sources. Add Playwright tests only once a visual interface exists.

## Commit & Pull Request Guidelines

Existing history follows concise Conventional Commit-style prefixes, including `docs:`, `chore:`, and `feat:`. Write imperative summaries, for example `feat: rank signals by evidence`.

Keep commits focused. Pull requests should state the user-facing or architectural effect, link relevant issues when available, list validation performed, and include screenshots for dashboard changes. Never commit credentials, tokens, or production data; use local fixtures and documented environment variables instead.
