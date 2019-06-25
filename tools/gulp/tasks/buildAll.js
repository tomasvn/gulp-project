const gulp = require('gulp')
const runSequence = require('run-sequence')

gulp.task('build', callback => {
  runSequence('clean', ['build:html', 'build:styles', 'build:js', 'build:fonts', 'optimize'],
    callback
  )
})