var gulp = require('gulp')
var shell = require('gulp-shell')
var config = require("../config.json")
var wrapper = require("gulp-wrapper")
var rename = require("gulp-rename")
var del = require("del");

gulp.task('locale',function() {
  gulp.src(config.locale.src+"/*.json")
  .pipe(wrapper({
       header: 'module.exports = ',
       footer: ''
    }))
  .pipe(rename(function (path) {
    if(/\.json/.test(path.extname))
    {
      path.extname = ".js"
    }
  }))
  .pipe(gulp.dest(config.locale.dest))

})
