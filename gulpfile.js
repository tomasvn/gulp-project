var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');
var browserSync = require('browser-sync').create();

gulp.task('scss:build', function() {
  return gulp.src('./src/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('scss:watch', function () {
  gulp.watch('./src/**/*.scss', ['scss']);
});

gulp.task('clean', function() {
  return del(['dist/styles', 'dist/scripts', 'dist/images']);
});