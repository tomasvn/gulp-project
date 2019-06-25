const gulp = require('gulp')
const runSequence = require('run-sequence')

gulp.task('e2e-test', cb => {
  runSequence(
    'server:start',
    'nightwatch',
    'server:kill', cb)
})