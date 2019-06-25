const gulp = require('gulp')
const nightwatch = require('gulp-nightwatch')
const plumber = require('gulp-plumber')

/**
 * Nightwatch tests
*/

gulp.task('nightwatch', () => {
  return gulp.src('')
  .pipe(plumber())
  .pipe(nightwatch({
    configFile: "tools/test-runners/nightwatch/nightwatch.json"
  }))
})