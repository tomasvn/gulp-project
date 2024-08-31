import gulp from "gulp";
import pump from "pump";
import plumber from "gulp-plumber";
import useref from "gulp-useref";
import concat from "gulp-concat";
import babel from "gulp-babel";
import uglify from "gulp-uglify";
import size from "gulp-size";
import maps from "gulp-sourcemaps";
import dartSass from 'sass';
import gulpSass from "gulp-sass";
import cssnano from "gulp-cssnano";
import autoprefixer from "gulp-autoprefixer";
import gulpIf from "gulp-if";
import stripDebug from "gulp-config-strip-debug";
import { config } from "../../../gulp-config.mjs";

const sass = gulpSass(dartSass);
const { src, dist, distRoot, isProd } = config.paths;

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
    gulpIf(!isProd, maps.init()),
    plumber(),
    stripDebug(),
    concat('main.min.js'), // Concat files to single file
    babel(),
    uglify(),
    size(),
    gulpIf(!isProd, maps.write('../maps')),
    gulp.dest(dist.jsDist)
  ])
});

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
    gulpIf(!isProd, maps.write('../maps')),
    gulp.dest(dist.stylesDist)
  ])
});

gulp.task('build:fonts', () => {
  return pump([
    gulp.src(src.fontsFiles),
    gulp.dest(dist.fontsDist)
  ])
});

export const build = gulp.parallel('build:html', 'build:js', 'build:styles', 'build:fonts');
