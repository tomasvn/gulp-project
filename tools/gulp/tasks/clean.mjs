import gulp from "gulp";
import del from "del";
import { config } from "../../../gulp-config";

const { src } = config.paths

/**
Clean Tasks
*/

gulp.task('clean:dev', () => {
  return del([src.stylesOutput])
});

gulp.task('clean', () => {
  return del(['dist']) // Delete dist folder
});

export const clean = gulp.parallel('clean:dev', 'clean');
