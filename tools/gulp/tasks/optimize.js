const gulp = require('gulp')
const pump = require('pump')
const plumber = require('gulp-plumber')
const imagemin = require('gulp-imagemin')
const gulpConfig = require('../../../gulp-config')
const dist = gulpConfig.paths.dist
const src = gulpConfig.paths.src

gulp.task('optimize', () => {
  return pump([
    gulp.src(src.imgFiles),
    plumber(),
    imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [{removeDoctype: true}, {removeDesc: true}, {removeViewBox: true}]
      })
    ]),
    gulp.dest(dist.imgDist)
  ])
})