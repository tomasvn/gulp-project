var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');
var browserSync = require('browser-sync').create();

gulp.task('clean', function() {
  return del(['dist/styles', 'dist/scripts', 'dist/images']);
});