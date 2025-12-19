import gulp from "gulp";
import pump from "pump"
import * as dartSass from 'sass';
import gulpSass from "gulp-sass";
import plumber from "gulp-plumber";
import browserSync from 'browser-sync';
import { config } from "./config.mjs";

const sass = gulpSass(dartSass);
const { stylesFiles, stylesOutput } = config.paths.src;

/**
Developement Tasks
*/

gulp.task('dev:styles', () => { // First argument is the name of the task, second argument callback function
  return pump([
    gulp.src(stylesFiles), // Look into this folder for any SCSS files
    plumber(),
    sass.sync().on('error', sass.logError), // If SCSS syntax has any error output it to the CLI
    sass({outputStyle: 'expanded'}),
    gulp.dest(stylesOutput), // Compile SCSS files into one CSS file, output it here
    browserSync.stream()
  ]);
});

export const devStyles = gulp.series('dev:styles');
