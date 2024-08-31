import gulp from "gulp";
import pump from "pump";
import plumber from "gulp-plumber";
import imagemin from "gulp-imagemin";
import { config } from "../../../gulp-config.mjs";

const { dist, src } = config.paths;

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
});
