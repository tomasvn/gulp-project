const gulp = require('gulp')
const del = require('del')
const gulpConfig = require('../../../gulp-config')
const src = gulpConfig.paths.src

/**
Clean Tasks
*/

gulp.task('clean:dev', () => {
  return del([src.stylesOutput])
})

gulp.task('clean', () => {
  return del(['dist']) // Delete dist folder
})