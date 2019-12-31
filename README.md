# Gulp Basic Workflow

Basic gulp workflow boilerplate.
:warning: Works for Node.js < 8

## Installation

```
npm install
```

## NPM Scripts

1. Dev task & run dev server + Hot Reload - ```npm run start``` ✔️
2. Linting CSS - ```npm run lint:css``` ✔️
3. Linting JS - ```npm run lint:js``` ✔️
4. Build task - ```npm run build``` ✔️
5. Test - ```npm test``` ✔️
6. Clean dev folder - ```npm run clean:dev``` ✔️
7. Clean build folder - ```npm run clean:build``` ✔️
8. Autofix linting issues - ```npm run lint:fix``` ️✔️
9. Deploy Project - ```npm run deploy``` ❌

---

## Changelog

### [![Stable Version](https://img.shields.io/badge/version-0.2.0-green.svg)]()
- [x] Redo Gulp Tasks
- [x] Correctly set up gulp watch
- [x] Add comments to the gulp file

### [![Stable Version](https://img.shields.io/badge/version-0.4.0-green.svg)]()
- [x] Set up stylelint for SCSS/CSS
- [x] Set up HUSKY Git Hook (Enforcing linting)

### [![Stable Version](https://img.shields.io/badge/version-0.5.0-green.svg)]()
- [x] Set up browser-sync in dev task
- [x] Add initial build task
- [x] Add dev clean task
- [x] Fix paths variable
- [x] Set up autoprefixer in build task

### [![Stable Version](https://img.shields.io/badge/version-0.6.0-green.svg)]()
- [x] Set up JS linting
- [x] Set up image optimization in build
- [x] Set up minification CSS/JS in build
- [x] Copy fonts task in build
- [x] Set up linting with --fix option, to fix all linting issues

### [![Stable Version](https://img.shields.io/badge/version-0.7.0-green.svg)]()
- [x] Add files size to output - which will log out the full size [gulp-size](https://www.npmjs.com/package/gulp-size)
- [x] ~~Add gulp notify - add notification output to ```.pipe()``` stream in gulp tasks [gulp-notify](https://www.npmjs.com/package/gulp-notify)~~ Removed

### [![Stable Version](https://img.shields.io/badge/version-0.7.1-green.svg)]()
- [x] Set up surge.sh deployment script *needs more work*
- [x] Set up HUSKY for surge.sh deployment script (Deploy build on pre-push hook) *needs more work*

### [![Stable Version](https://img.shields.io/badge/version-0.7.2-green.svg)]()
- [x] Set up babel for compiling basic ES6 features
- [x] Set up source maps in build

### [![Stable Version](https://img.shields.io/badge/version-0.7.3-green.svg)]()
- [x] Update source-maps output, remove gulp-notify

### [![Stable Version](https://img.shields.io/badge/version-0.7.4-green.svg)]()
- [x] Nightwatch.js E2E Testing
- [x] Set up CSS regression testing tool
  - [backstop.js](https://github.com/garris/BackstopJS)
  - [backstop.js on WP](https://www.christoflee.co.uk/backstopjs-a-beginners-guide-to-testing-in-wordpress/)
  - [backstop.js config file](https://github.com/wlsf82/backstop-config)

### [![Stable Version](https://img.shields.io/badge/version-0.7.5-green.svg)]()
- [x] Add prettier
- [x] Add gulp-plumber to prevent pipe breaking from gulp errors

### [![New Version](https://img.shields.io/badge/version-1.0.0-orange.svg)]()
#### Major Update
- [x] Restructure project folder
  - [x] Create sub folder tools - gulp, nightwatch, backstop etc.
  - [x] Create sub folder for gulp tasks, divide main file to separte task files
  - [x] Create individual gulp tasks

### [![Stable Version](https://img.shields.io/badge/version-1.2.1-green.svg)]()
- [x] Add lint-staged
- [x] Update pre-commit hook
- [x] Add commitizen

## Future Update

- [ ] Inline critical css in build [inline-critical](https://github.com/addyosmani/critical)
- [ ] ~~Set up SCSS unit testing? [Read Here](https://seesparkbox.com/foundry/how_and_why_we_unit_test_our_sass)~~
---
## [MIT License](LICENSE.md)
