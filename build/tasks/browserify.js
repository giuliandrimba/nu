var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var bundleLogger = require('../util/bundleLogger');
var handleErrors = require('../util/handleErrors');
var source = require('vinyl-source-stream');
var argv = require("yargs").argv;
var gStreamify = require("gulp-streamify");
var refresh = require('gulp-livereload');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');

var server = require("./server");
var config = require("../config.json");

var env = argv.env != "production";


gulp.task('browserify', function() {
  var bundler = browserify({
    // Required watchify args
    cache: {}, packageCache: {}, fullPaths: true,
    // Specify the entry point of your app
    entries: [config.browserify.boot],
    // Add file extentions to make optional in your requires
    extensions: ['.coffee', '.jade'],
    // Enable source maps!
    debug: !env
  });

  var bundle = function() {
    // Log when bundling starts
    bundleLogger.start();

    return bundler
      .bundle()
      // Report compile errors
      .on('error', handleErrors)
      // Use vinyl-source-stream to make the
      // stream gulp compatible. Specifiy the
      // desired output filename here.
      .pipe(source('app.js'))
      // Specify the output destination
      .pipe(argv.env != "production" ? gutil.noop() : gStreamify(uglify()))
      .pipe(gulp.dest(config.output.path + "/" + config.output.scripts))
      .pipe(server.refresh())
      // Log when bundling completes!
      .on('end', bundleLogger.end);
  };

  if(global.isWatching) {
    bundler = watchify(bundler);
    // Rebundle with watchify on changes.
    bundler.on('update', bundle);
  }

  return bundle();

});