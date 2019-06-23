/*
Basic Gulp Workflow v0.7.4
Created by: Ngoc Tu Nguyen <nguyenngoct2112@gmail.com>
Github Repo: https://github.com/tomasvn/gulp-project.git
**/

/*
Gulp Plugins
**/

const gulp = require('gulp')
const gulpConfig = require('./gulp-config.js')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const cssnano = require('gulp-cssnano')
const browserSync = require('browser-sync').create() // Create browser sync instance
const del = require('del')
const uglify = require('gulp-uglify')
const gulpIf = require('gulp-if')
const imagemin = require('gulp-imagemin')
const runSequence = require('run-sequence')
const size = require('gulp-size')
const surge = require('gulp-surge')
const babel = require('gulp-babel')
const maps = require('gulp-sourcemaps')
const concat = require('gulp-concat')
const useref = require('gulp-useref')
const nightwatch = require('gulp-nightwatch')
const plumber = require('gulp-plumber')

/**
Gulp config variables
*/

const src = gulpConfig.paths.src
const dist = gulpConfig.paths.dist
const distRoot = gulpConfig.paths.distRoot
const srcRoot = gulpConfig.paths.srcRoot

/**
 * Init BS server
*/

gulp.task('server:start', () => {
  browserSync.init({
    server: srcRoot,
    open: false
  })
})

/**
 * Nightwatch tests
*/

gulp.task('nightwatch', () => {
  return gulp.src('')
  .pipe(plumber())
  .pipe(nightwatch({
    configFile: "tools/test-runners/nightwatch/nightwatch.json"
  }))
})

/**
 * Kill BS server
*/

gulp.task('server:kill', () => {
  setTimeout(() => {
    browserSync.exit()
  }, 3000)
})

gulp.task('e2e-test', cb => {
  runSequence(
    'server:start',
    'nightwatch',
    'server:kill', cb)
})

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

gulp.task('watch', ['dev:styles'], () => {
  browserSync.init({ // Initialize browser sync
    server: srcRoot // Input folder we want to serve to the browser
  })

  gulp.watch(src.stylesFiles, ['dev:styles']) // Watch - it will run the styles task on file change
  gulp.watch(src.htmlFiles).on('change', browserSync.reload) // Watch changes in HTML file and reload it browser
})

/**
Clean Tasks
*/

gulp.task('clean:dev', () => {
  return del([src.stylesOutput])
})

gulp.task('clean', () => {
  return del(['dist']) // Delete dist folder
})

/**
Build Tasks
*/

gulp.task('build:html', () => {
  return gulp.src(src.htmlFiles)
    .pipe(plumber())
    .pipe(useref())
    .pipe(gulp.dest(distRoot))
})

gulp.task('build:js', () => {
  return gulp.src(src.jsFiles)
    .pipe(maps.init())
    .pipe(plumber())
    .pipe(concat('main.min.js')) // Concat files to single file
    .pipe(babel())
    .pipe(uglify()) // Minify only if it is a JS file
    .pipe(size())
    .pipe(maps.write('../maps'))
    .pipe(gulp.dest(dist.jsDist))
})

gulp.task('build:styles', () => {
  return gulp.src(src.stylesFiles)
    .pipe(maps.init())
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 5 versions'],
      cascade: false
    }))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(size())
    .pipe(maps.write('../maps'))
    .pipe(gulp.dest(dist.stylesDist))
})

gulp.task('build:fonts', () => {
  return gulp.src(src.fontsFiles)
    .pipe(gulp.dest(dist.fontsDist))
})

gulp.task('optimize', () => {
  return gulp.src(src.imgFiles)
    .pipe(plumber())
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [{removeDoctype: true}, {removeDesc: true}, {removeViewBox: true}]
      })
    ]))
    .pipe(gulp.dest(dist.imgDist))
})

gulp.task('build', callback => {
  runSequence('clean', ['build:html', 'build:styles', 'build:js', 'build:fonts', 'optimize'],
    callback
  )
})

/*gulp.task('deploy', function() {
  return surge({
    project: './dist',
    domain: <project-domain-name>
  })
})*/

