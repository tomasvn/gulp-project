import gulp from "gulp"
import browserSync from "browser-sync";
import { config } from "../../../gulp-config.mjs";

const { srcRoot, src } = config.paths;

gulp.task('watch', ['dev:styles'], () => {
  browserSync.init({ // Initialize browser sync
    server: srcRoot // Input folder we want to serve to the browser
  });

  gulp.watch(src.stylesFiles, ['dev:styles']); // Watch - it will run the styles task on file change
  gulp.watch(src.htmlFiles).on('change', browserSync.reload); // Watch changes in HTML file and reload it browser
});
