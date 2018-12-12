# Gulp Basic Workflow

## Installation

```
npm install
```

## Before Using Gulp

**__Your folder structure should be as follow, as gulp tasks are made based on this folder structure__**

![folders](https://i.imgur.com/7GY1ihH.png "folders")

## NPM Scripts

1. Dev task & run dev server + Hot Reload - ```npm run dev``` ✔️
3. Linting CSS - ```npm run lint:css``` ✔️
4. Linting JS - ```npm run lint:js``` ✔️
5. Build task - ```npm run build``` ✔️
6. Clean dev folder - ```npm run clean:dev``` ✔️
7. Clean build folder - ```npm run clean:build``` ✔️
8. Autofix linting issues - ```npm run lint:fix``` ️✔️
9. Deploy Project - ```npm run deploy``` ❌

---

## Changelog

### v0.2.0
- [x] Redo Gulp Tasks
- [x] Correctly set up gulp watch
- [x] Add comments to the gulp file

### v0.4.0
- [x] Set up stylelint for SCSS/CSS
- [x] Set up HUSKY Git Hook (Enforcing linting)

### v0.5.0
- [x] Set up browser-sync in dev task
- [x] Add initial build task
- [x] Add dev clean task
- [x] Fix paths variable
- [x] Set up autoprefixer in build task

### v0.6.0
- [x] Set up JS linting
- [x] Set up image optimization in build
- [x] Set up minification CSS in build
- [x] Set up minification JS in build
- [x] Copy fonts task in build
- [x] Set up linting with --fix option, to fix all linting issues

### v0.7.0
- [x] Add files size to output - which will log out the full size [gulp-size](https://www.npmjs.com/package/gulp-size)
- [x] ~~Add gulp notify - add notification output to ```.pipe()``` stream in gulp tasks [gulp-notify](https://www.npmjs.com/package/gulp-notify)~~ Removed

### v0.7.1
- [x] Set up surge.sh deployment script *needs more work*
- [x] Set up HUSKY for surge.sh deployment script (Deploy build on pre-push hook) *needs more work*

### v0.7.2
- [x] Set up babel for compiling basic ES6 features
- [x] Set up source maps in build

### v0.7.3
- [x] Update source-maps output, remove gulp-notify

### v0.7.4
- [ ] Set up gulp modes - production / developement environment

## Future Update

- [ ] Inline critical css in build [inline-critical](https://github.com/addyosmani/critical)
- [ ] Set up CSS regression testing tool
  - [backstop.js](https://github.com/garris/BackstopJS)
  - [backstop.js on WP](https://www.christoflee.co.uk/backstopjs-a-beginners-guide-to-testing-in-wordpress/)
- [ ] Nightwatch.js E2E Testing
- [ ] ~~Set up SCSS unit testing? [Read Here](https://seesparkbox.com/foundry/how_and_why_we_unit_test_our_sass)~~
---
## [MIT License](LICENSE.md)
