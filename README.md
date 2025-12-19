# Gulp Basic Workflow

- Basic gulp workflow boilerplate.
- `node >= 20`

## Installation

```
pnpm install
```

## PNPM Scripts

1. Dev task & run dev server + Hot Reload - `pnpm run start` ✔️
2. Linting CSS - `pnpm run lint:css` ✔️
3. Linting JS - `pnpm run lint:js` ✔️
4. Build task - `pnpm run build` ✔️
5. Test (All tests) - `pnpm test` ✔️
6. E2E Tests - `pnpm run test:e2e` ✔️
7. Visual Tests - `pnpm run test:visual` ✔️
8. Update Visual Baselines - `pnpm run test:visual-update` ✔️
9. Clean dev folder - `pnpm run clean:dev` ✔️
10. Clean build folder - `pnpm run clean:build` ✔️
11. Autofix linting issues - `pnpm run lint:fix` ️✔️
12. Deploy Project - `pnpm run deploy` ❌

## Testing

This project uses **Playwright** for both E2E and visual regression testing:

- **E2E Tests** - Located in `/tests/` directory
- **Visual Tests** - Located in `/tests/visual/` directory with multi-viewport support (desktop, tablet, mobile)

## [Changelog](CHANGELOG.md)

## [MIT License](LICENSE.md)
