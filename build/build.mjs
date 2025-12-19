import gulp from "gulp";
import pump from "pump";
import plumber from "gulp-plumber";
import useref from "gulp-useref";
import concat from "gulp-concat";
import babel from "gulp-babel";
import uglify from "gulp-uglify";
import size from "gulp-size";
import maps from "gulp-sourcemaps";
import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import cssnano from "gulp-cssnano";
import autoprefixer from "gulp-autoprefixer";
import gulpIf from "gulp-if";
import stripDebug from "gulp-config-strip-debug";
import rev from "gulp-rev";
import revReplace from "gulp-rev-replace";
import { config } from "./config.mjs";

const sass = gulpSass(dartSass);
const { src, dist, distRoot } = config.paths;
const isProd = () => process.argv.includes("--production");

/**
Build Tasks
*/

gulp.task("build:html", () => {
    return pump([gulp.src(src.htmlFiles), plumber(), useref(), gulp.dest(distRoot)]);
});

gulp.task("build:js", () => {
    return pump([
        gulp.src(src.jsFiles),
        gulpIf(!isProd(), maps.init()),
        plumber(),
        stripDebug(),
        concat("main.min.js"), // Concat files to single file
        babel(),
        uglify(),
        gulpIf(isProd(), rev()), // Add hash for cache busting in production
        size(),
        gulpIf(!isProd(), maps.write("../maps")),
        gulp.dest(dist.jsDist),
        gulpIf(isProd(), rev.manifest("rev-manifest.json")),
        gulpIf(isProd(), gulp.dest(dist.jsDist)),
    ]);
});

gulp.task("build:styles", () => {
    return pump([
        gulp.src(src.stylesFiles),
        maps.init(),
        plumber(),
        sass(),
        autoprefixer({
            cascade: false,
        }),
        gulpIf("*.css", cssnano()),
        gulpIf(isProd(), rev()), // Add hash for cache busting in production
        size(),
        gulpIf(!isProd(), maps.write("../maps")),
        gulp.dest(dist.stylesDist), // Write files to styles folder
        gulpIf(isProd(), rev.manifest("rev-manifest.json")),
        gulpIf(isProd(), gulp.dest(dist.stylesDist)), // Write manifest to styles folder
    ]);
});

gulp.task("build:fonts", (done) => {
    // Only process fonts if they exist
    return pump([gulp.src(src.fontsFiles, { allowEmpty: true }), gulp.dest(dist.fontsDist)], done);
});

// Task to replace asset references with cache-busted versions
gulp.task("build:rev-replace", (done) => {
    const manifest = gulp.src([`${distRoot}/**/rev-manifest.json`], { allowEmpty: true });
    return pump([gulp.src(`${distRoot}/*.html`), revReplace({ manifest }), gulp.dest(distRoot)], done);
});

// Build sequence: assets first, then HTML with references, then cache-busting replacements (if prod)
gulp.task("build:all", gulp.series(gulp.parallel("build:js", "build:styles", "build:fonts"), "build:html"));

// Task to combine manifests from individual tasks
gulp.task("build:manifest", async (done) => {
    const fs = await import("fs/promises");
    const path = await import("path");

    try {
        const jsDist = dist.jsDist.endsWith("/") ? dist.jsDist : `${dist.jsDist}/`;
        const stylesDist = dist.stylesDist.endsWith("/") ? dist.stylesDist : `${dist.stylesDist}/`;

        const jsManifestPath = path.resolve(`${jsDist}rev-manifest.json`);
        const stylesManifestPath = path.resolve(`${stylesDist}rev-manifest.json`);

        let combined = {};

        // Read JS manifest
        try {
            const jsManifest = await fs.readFile(jsManifestPath, "utf8");
            const jsData = JSON.parse(jsManifest);
            combined = { ...combined, ...jsData };
        } catch (err) {
            // JS manifest not found, continue
        }

        // Read styles manifest
        try {
            const stylesManifest = await fs.readFile(stylesManifestPath, "utf8");
            const stylesData = JSON.parse(stylesManifest);
            combined = { ...combined, ...stylesData };
        } catch (err) {
            // CSS manifest not found, continue
        }

        // Write combined manifest
        if (Object.keys(combined).length > 0) {
            const outputPath = path.resolve(`${distRoot}/rev-manifest.json`);
            await fs.writeFile(outputPath, JSON.stringify(combined, null, 2));
        }

        done();
    } catch (err) {
        done(err);
    }
});
