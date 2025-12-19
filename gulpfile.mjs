/*
Basic Gulp Workflow v2.0.0
Created by: Ngoc Tu Nguyen <nguyenngoct2112@gmail.com>
Github Repo: https://github.com/tomasvn/gulp-project.git
**/

import gulp from "gulp";

// Import build tasks manually (importDir was causing issues)
import "./build/config.mjs";
import "./build/clean.mjs";
import "./build/server.mjs";
import "./build/styles.mjs";
import "./build/watch.mjs";
import "./build/build.mjs";
import "./build/optimize.mjs";

// Main build tasks
gulp.task("build", gulp.series("clean", gulp.parallel("build:js", "build:styles"), "build:html"));
gulp.task(
    "build:production",
    gulp.series("clean", "build:js", "build:styles", "build:manifest", "build:html", "build:rev-replace"),
);

/*gulp.task('deploy', function() {
  return surge({
    project: './dist',
    domain: <project-domain-name>
  })
})*/
