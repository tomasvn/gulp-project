import gulp from "gulp";
import runSequence from "run-sequence";

gulp.task("e2e-test", (cb) => {
    runSequence("server:start", "nightwatch", "server:kill", cb);
});
