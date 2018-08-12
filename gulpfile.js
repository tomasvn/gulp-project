/*
Basic Gulp Workflow v0.5.0
Created by: Ngoc Tu Nguyen <nguyenngoct2112@gmail.com>
Github Repo: https://github.com/tomasvn/gulp-project.git
**/

var gulp = require('gulp');
var browserSync = require('browser-sync').create(); //Create browser sync instance
var sass = require('gulp-sass');
var del = require('del');

gulp.task('styles', function() { //First argument is the name of the task, second argument callback function
  return gulp.src('./src/scss/*.scss') //Look into this folder for any SCSS files
    .pipe(sass())
    .pipe(sass.sync().on('error', sass.logError)) //If SCSS syntax has any error output it to the CLI
    .pipe(gulp.dest('./src/styles')) //Compile SCSS files into one CSS file, output it here
    .pipe(browserSync.stream())
});

gulp.task('watch', ['styles'], function() {
  
  browserSync.init({ //Initialize browser sync
    server: './src' //Input folder we want to serve to the browser
  });

  gulp.watch('./src/scss/*.scss', ['styles']); //Watch - it will run the styles task on file change
  gulp.watch('./src/*.html').on('change', browserSync.reload); //Watch changes in HTML file and reload it browser
});

gulp.task('clean', function() {
  return del(['dist/styles', 'dist/scripts', 'dist/images']); //Delete particular files in dist folder
});