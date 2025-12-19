import gulp from "gulp";
import { deleteAsync } from "del";
import { config } from "./config.mjs";

const { src } = config.paths;

/**
Clean Tasks
*/

gulp.task("clean:dev", () => {
    return deleteAsync([src.stylesOutput]);
});

gulp.task("clean", () => {
    return deleteAsync(["dist"]); // Delete dist folder
});

export const clean = gulp.parallel("clean:dev", "clean");
