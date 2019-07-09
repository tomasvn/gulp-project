const gulp = require('gulp')
const pump = require('pump')
const plumber = require('gulp-plumber')
const useref = require('gulp-useref')
const concat = require('gulp-concat')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const size = require('gulp-size')
const maps = require('gulp-sourcemaps')
const sass = require('gulp-sass')
const cssnano = require('gulp-cssnano')
const autoprefixer = require('gulp-autoprefixer')
const gulpIf = require('gulp-if')
const gulpConfig = require('../../../gulp-config')
const src = gulpConfig.paths.src
const dist = gulpConfig.paths.dist
const distRoot = gulpConfig.paths.distRoot

/**
Build Tasks
*/

gulp.task('build:html', () => {
  return pump([
    gulp.src(src.htmlFiles),
    plumber(),
    useref(),
    gulp.dest(distRoot)
  ])
})

gulp.task('build:js', () => {
  return pump([
    gulp.src(src.jsFiles),
    maps.init(),
    plumber(),
    concat('main.min.js'), // Concat files to single file
    babel(),
    uglify(),
    size(),
    maps.write('../maps'),
    gulp.dest(dist.jsDist)
  ])
})

gulp.task('build:styles', () => {
  return pump([
    gulp.src(src.stylesFiles),
    maps.init(),
    plumber(),
    sass(),
    autoprefixer({
      browsers: ['last 5 versions'],
      cascade: false
    }),
    gulpIf('*.css', cssnano()),
    size(),
    maps.write('../maps'),
    gulp.dest(dist.stylesDist)
  ])
})

gulp.task('build:fonts', () => {
  return pump([
    gulp.src(src.fontsFiles),
    gulp.dest(dist.fontsDist)
  ])
})