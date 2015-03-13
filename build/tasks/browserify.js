var gulp = require('gulp');
var browserify = require('gulp-browserify')
var argv = require("yargs").argv;
var gStreamify = require("gulp-streamify");
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var server = require("./server");
var config = require("../config.json");

var env = argv.env != "production";

gulp.task('browserify', function() {
  gulp.src(config.browserify.boot, { read: false })
    .pipe(browserify({
      debug: !env,
      transform: ['coffeeify', "babelify", "reactify", 'jadeify', 'stringify'],
      extensions: ['.coffee', '.jade', '.html'],
      paths: ['../src', '../node_modules']
    }))
    .pipe(rename('app.js'))
    .pipe(argv.env != "production" ? gutil.noop() : gStreamify(uglify()))
    .pipe(gulp.dest('../public'))
    .pipe(server.refresh())
});
