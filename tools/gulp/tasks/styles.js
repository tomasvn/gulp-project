const gulp = require('gulp')
const sass = require('gulp-sass')
const plumber = require('gulp-plumber')
const browserSync = require('browser-sync').create()
const gulpConfig = require('../../../gulp-config')
const src = gulpConfig.paths.src

/**
Developement Tasks
*/

gulp.task('dev:styles', () => { // First argument is the name of the task, second argument callback function
  return gulp.src(src.stylesFiles) // Look into this folder for any SCSS files
    .pipe(plumber())
    .pipe(sass())
    .pipe(sass.sync().on('error', sass.logError)) // If SCSS syntax has any error output it to the CLI
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest(src.stylesOutput)) // Compile SCSS files into one CSS file, output it here
    .pipe(browserSync.stream())
})