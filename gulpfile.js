/*
Basic Gulp Workflow v1.0.0
Created by: Ngoc Tu Nguyen <nguyenngoct2112@gmail.com>
Github Repo: https://github.com/tomasvn/gulp-project.git
**/

const requireDir = require('require-dir')
requireDir('./tools/gulp/tasks/', { recurse: true })

/*gulp.task('deploy', function() {
  return surge({
    project: './dist',
    domain: <project-domain-name>
  })
})*/

