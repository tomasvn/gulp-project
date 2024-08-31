import gulp from "gulp";
import nightwatch from "gulp-nightwatch";
import plumber from "gulp-plumber";
import pump from "pump";

/**
 * Nightwatch tests
 */

gulp.task("nightwatch", () => {
    return pump([
        gulp.src(""),
        plumber(),
        nightwatch({
            configFile: "tools/test-runners/nightwatch/nightwatch.json",
        }),
    ])
});
