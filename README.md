# Gulp Basic Workflow

## Installation

```
npm install
```

## Before Using Gulp

**Your folder structure should be as follow, as gulp tasks are made based on this folder structure**

![folders](https://i.imgur.com/7GY1ihH.png "folders")

## Tasks

1. Dev task & run dev server + Hot Reload - ```npm run dev``` ✔️
3. Linting CSS - ```npm run lint:css``` ✔️
4. Linting JS - ```npm run lint:js``` [**WIP**]
5. Build task - ```npm run build``` ✔️
6. Clean dev folder - ```npm run clean:dev``` ✔️
7. Clean build folder - ```npm run clean:build``` ✔️

---

## Changelog

### Update - v0.2.0
- [x] Redo Gulp Tasks
- [x] Correctly set up gulp watch
- [x] Add comments to the gulp file

### Update - v0.4.0
- [x] Set up stylelint for SCSS/CSS
- [x] Set up HUSKY Git Hook (Enforcing linting)

### Update - v0.5.0
- [x] Set up browser-sync in dev task
- [x] Add initial build task
- [x] Add dev clean task
- [x] Fix paths variable
- [x] Set up autoprefixer in build task

### Update - v0.6.0
- [ ] Set up JS linting
- [ ] Set up image optimization in build
- [x] Set up minification CSS in build
- [ ] Set up minification JS in build
- [ ] Set up Source Maps in build

---
## [MIT License](LICENSE.md)
