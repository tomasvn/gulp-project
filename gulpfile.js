/*
Basic Gulp Workflow v0.6.0
Created by: Ngoc Tu Nguyen <nguyenngoct2112@gmail.com>
Github Repo: https://github.com/tomasvn/gulp-project.git
**/

var gulp = require('gulp');
var browserSync = require('browser-sync').create(); //Create browser sync instance
var sass = require('gulp-sass');
var del = require('del');
var autoprefixer = require('gulp-autoprefixer');

var config = {
  stylesInput: './src/scss/*.scss',
  stylesOutput: './src/styles',
  srcHtml: './src/*.html'
}

/**
Developement Tasks
*/

gulp.task('styles', function() { //First argument is the name of the task, second argument callback function
  return gulp.src(config.stylesInput) //Look into this folder for any SCSS files
    .pipe(sass())
    .pipe(sass.sync().on('error', sass.logError)) //If SCSS syntax has any error output it to the CLI
    .pipe(gulp.dest(config.stylesOutput)) //Compile SCSS files into one CSS file, output it here
    .pipe(browserSync.stream())
});

gulp.task('watch', ['styles'], function() {
  
  browserSync.init({ //Initialize browser sync
    server: './src' //Input folder we want to serve to the browser
  });

  gulp.watch(config.stylesInput, ['styles']); //Watch - it will run the styles task on file change
  gulp.watch(config.srcHtml).on('change', browserSync.reload); //Watch changes in HTML file and reload it browser
});

/**
Build Tasks
*/

gulp.task('build:html', function() {
  return gulp.src(srcHtml)
    .pipe(gulp.dest('./dist'))
});

gulp.task('build', ['build:html'], function() {
  return gulp.src(config.stylesPath)
    .pipe(sass())
    .pipe(gulp.dest('./dist/styles'))
});

/**
Clean Tasks
*/

gulp.task('clean:dev', function() {
  return del([config.stylesOutput]);
});

gulp.task('clean', function() {
  return del(['dist']); //Delete dist folder
});
