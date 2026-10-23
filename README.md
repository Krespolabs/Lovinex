# Lovinex

Lovinex is a Next.js landing-page project presenting a concept for a dating service aimed at connecting people across cultures. The current application is a frontend experience; it does not provide a production dating service or backend features such as accounts, messaging, profile verification, payments, or matchmaking.

## Current development status

The repository contains a responsive marketing-style homepage, shared UI components, and frontend utilities. Product and safety descriptions visible on the page are presentation copy, not evidence of implemented service functionality. No production deployment or backend integration is configured in this repository.

## Tech stack

- Next.js **15.5.28** (App Router)
- React 19 and TypeScript
- Tailwind CSS and shared Radix-based UI components
- pnpm for package management
- Node.js **20.9 or newer**

## Repository layout

The runnable Next.js project is in `LOVINEX/`:

- `LOVINEX/app/` — App Router layout and homepage
- `LOVINEX/components/` — shared components
- `LOVINEX/hooks/` — custom React hooks
- `LOVINEX/lib/` — shared utilities
- `LOVINEX/public/` — static assets
- `LOVINEX/tests/` — unit tests

## Getting started

Run these commands from the repository root:

```sh
cd LOVINEX
pnpm install --frozen-lockfile
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). To create and run the production build:

```sh
pnpm build
pnpm start
```

## Tests

Run the automated unit tests from `LOVINEX/`:

```sh
pnpm test
```

The tests exercise the existing `cn` utility used by the UI to combine conditional class values and resolve conflicting Tailwind classes. GitHub Actions runs the tests and production build on pushes and pull requests.

## Author

**Krespo (Samson Onuh)** — Founder, Krespo Labs

- LinkedIn: [linkedin.com/in/onuh-samson-4658aa2a2](https://www.linkedin.com/in/onuh-samson-4658aa2a2/)
- Website: [krespoai.netlify.app](https://krespoai.netlify.app)
- GitHub: [Krespolabs](https://github.com/Krespolabs)
- Portfolio PDF: [Samson Onuh portfolio](https://github.com/Krespolabs/Krespolabs-/blob/main/docs/portfolio_samson_onuh.pdf)
