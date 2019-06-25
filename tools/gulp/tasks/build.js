const gulp = require('gulp')
const plumber = require('gulp-plumber')
const useref = require('gulp-useref')
const concat = require('gulp-concat')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const size = require('gulp-size')
const maps = require('gulp-sourcemaps')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const gulpIf = require('gulp-if')
const gulpConfig = require('../../../gulp-config')
const src = gulpConfig.paths.src
const dist = gulpConfig.paths.dist

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