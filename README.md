# Fraud Policy Simulator

A small tool for payments risk teams to pressure-test fraud policy changes
before pushing them to production. Drag the threshold slider and watch how
approval rate, fraud prevented, and review volume move against each other, so
the tradeoffs behind a "one number" policy call are out in the open.

## What it does

- Adjustable risk-score threshold — anything above it gets auto-reviewed
- Live projections for legitimate approvals, fraud loss prevented, and daily
  review caseload
- A recommended operating point with a short rationale, so you have something
  to push back on rather than a black box
- Save a scenario (handy for sharing with reviewers during a policy review)

## Running locally

Needs Node 18 or newer.

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build into dist/
npm run preview  # serve the production build locally
npm run format   # format the codebase with Prettier
```

## How it's built

Plain React (no UI framework) on top of Vite. The styling is hand-rolled CSS
with a small set of design tokens at the top of `src/styles.css` — deep navy
background, amber accent, DM Mono for numbers and Manrope for everything else.

The app is split into a handful of small components under `src/components/`
so each piece of the UI is easy to find and tweak on its own.

## Notes

The projection curves are simplified for illustration — they're linear
approximations of what a real risk model would surface, meant to make the
shape of the tradeoff obvious rather than to predict exact numbers.

---

&copy; 2026 Bennyhin Bapanapalli
