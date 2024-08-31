import gulp from "gulp";
import browserSync from "browser-sync";
import { config } from "../../../gulp-config";

const { srcRoot } = config.paths;

/**
 * Init BS server
*/

gulp.task('server:start', () => {
  browserSync.init({
    server: srcRoot,
    open: false
  });
});

/**
 * Kill BS server
*/

gulp.task('server:kill', () => {
  setTimeout(() => {
    browserSync.exit()
  }, 3000)
});
