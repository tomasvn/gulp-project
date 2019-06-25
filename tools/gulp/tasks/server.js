const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const gulpConfig = require('../../../gulp-config')
const srcRoot = gulpConfig.paths.srcRoot

/**
 * Init BS server
*/

gulp.task('server:start', () => {
  browserSync.init({
    server: srcRoot,
    open: false
  })
})

/**
 * Kill BS server
*/

gulp.task('server:kill', () => {
  setTimeout(() => {
    browserSync.exit()
  }, 3000)
})