/*
Basic Gulp Workflow v0.6.0
Created by: Ngoc Tu Nguyen <nguyenngoct2112@gmail.com>
Github Repo: https://github.com/tomasvn/gulp-project.git
**/

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var browserSync = require('browser-sync').create(); //Create browser sync instance
var del = require('del');

var paths = {
  stylesInput: './src/scss/*.scss',
  stylesOutput: './src/styles',
  stylesDist: 'dist/styles',
  srcHtml: './src/*.html'
}

/**
Developement Tasks
*/

gulp.task('dev:styles', function() { //First argument is the name of the task, second argument callback function
  return gulp.src(paths.stylesInput) //Look into this folder for any SCSS files
    .pipe(sass())
    .pipe(sass.sync().on('error', sass.logError)) //If SCSS syntax has any error output it to the CLI
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest(paths.stylesOutput)) //Compile SCSS files into one CSS file, output it here
    .pipe(browserSync.stream())
});

gulp.task('watch', ['dev:styles'], function() {
  
  browserSync.init({ //Initialize browser sync
    server: './src' //Input folder we want to serve to the browser
  });

  gulp.watch(paths.stylesInput, ['dev:styles']); //Watch - it will run the styles task on file change
  gulp.watch(paths.srcHtml).on('change', browserSync.reload); //Watch changes in HTML file and reload it browser
});

/**
Build Tasks
*/

gulp.task('build:html', function() {
  return gulp.src(paths.srcHtml)
    .pipe(gulp.dest('./dist'))
});

gulp.task('build:styles', function() {
  
  return gulp.src(paths.stylesInput)
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cssnano())
    .pipe(gulp.dest(paths.stylesDist))
});

gulp.task('build', ['build:html', 'build:styles']);

/**
Clean Tasks
*/

gulp.task('clean:dev', function() {
  return del([paths.stylesOutput]);
});

gulp.task('clean', function() {
  return del(['dist']); //Delete dist folder
});
