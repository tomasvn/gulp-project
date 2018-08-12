/*
Basic Gulp Workflow v0.5.0
Created by: Ngoc Tu Nguyen <nguyenngoct2112@gmail.com>
Github Repo: https://github.com/tomasvn/gulp-project.git
**/

var gulp = require('gulp');
var browserSync = require('browser-sync').create(); //Create browser sync instance
var sass = require('gulp-sass');
var del = require('del');
var autoprefixer = require('gulp-autoprefixer');

var paths = {
  stylesInput: './src/scss/*.scss',
  stylesOutput: './src/styles',
  stylesDist: 'dist/styles',
  srcHtml: './src/*.html'
}

/**
Developement Tasks
*/

gulp.task('styles', function() { //First argument is the name of the task, second argument callback function
  return gulp.src(paths.stylesInput) //Look into this folder for any SCSS files
    .pipe(sass())
    .pipe(sass.sync().on('error', sass.logError)) //If SCSS syntax has any error output it to the CLI
    .pipe(gulp.dest(paths.stylesOutput)) //Compile SCSS files into one CSS file, output it here
    .pipe(browserSync.stream())
});

gulp.task('watch', ['styles'], function() {
  
  browserSync.init({ //Initialize browser sync
    server: './src' //Input folder we want to serve to the browser
  });

  gulp.watch(paths.stylesInput, ['styles']); //Watch - it will run the styles task on file change
  gulp.watch(paths.srcHtml).on('change', browserSync.reload); //Watch changes in HTML file and reload it browser
});

/**
Build Tasks
*/

gulp.task('build:html', function() {
  return gulp.src(paths.srcHtml)
    .pipe(gulp.dest('./dist'))
});

gulp.task('build', ['build:html'], function() {
  return gulp.src(paths.stylesPath)
    .pipe(sass())
    .pipe(gulp.dest('./dist/styles'))
});

/**
Clean Tasks
*/

gulp.task('clean:dev', function() {
  return del([paths.stylesOutput]);
});

gulp.task('clean', function() {
  return del(['dist']); //Delete dist folder
});
