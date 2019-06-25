const gulp = require('gulp')
const plumber = require('gulp-plumber')
const imagemin = require('gulp-imagemin')
const gulpConfig = require('../../../gulp-config')
const dist = gulpConfig.paths.dist

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