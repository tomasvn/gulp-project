const gulp = require('gulp')
const nightwatch = require('gulp-nightwatch')
const plumber = require('gulp-plumber')
const pump = require('pump')

/**
 * Nightwatch tests
*/

gulp.task('nightwatch', () => {
  return pump([
    gulp.src(''),
    plumber(),
    nightwatch({
      configFile: "tools/test-runners/nightwatch/nightwatch.json"
    })
  ])
})