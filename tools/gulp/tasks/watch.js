const gulp = require('gulp')
const gulpConfig = require('../../../gulp-config.js')
const srcRoot = gulpConfig.paths.srcRoot
const src = gulpConfig.paths.src
const browserSync = require('browser-sync').create()

gulp.task('watch', ['dev:styles'], () => {
  browserSync.init({ // Initialize browser sync
    server: srcRoot // Input folder we want to serve to the browser
  })

  gulp.watch(src.stylesFiles, ['dev:styles']) // Watch - it will run the styles task on file change
  gulp.watch(src.htmlFiles).on('change', browserSync.reload) // Watch changes in HTML file and reload it browser
})