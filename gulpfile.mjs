/*
Basic Gulp Workflow v2.0.0
Created by: Ngoc Tu Nguyen <nguyenngoct2112@gmail.com>
Github Repo: https://github.com/tomasvn/gulp-project.git
**/

import path from "node:path"
import importDir from "@yimura/import-dir";

importDir(path.resolve("./build/"), { recurse: true, noCache: true });

/*gulp.task('deploy', function() {
  return surge({
    project: './dist',
    domain: <project-domain-name>
  })
})*/

