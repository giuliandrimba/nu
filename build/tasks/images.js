var gulp = require("gulp");
var argv = require("yargs").argv;
var imagemin = require("gulp-imagemin");
var cache = require("gulp-cache");
var gulpFilter = require('gulp-filter');
var debug = require('gulp-debug');
var changed = require('gulp-changed');
var config = require("../config.json");
var gutil = require('gulp-util');
var path = require("path")

gulp.task('images', ['image:sequences'],function() {
  return images()
});

gulp.task('svg', function() {

  gulp.src([config.images.src+".svg"])
    .pipe(changed(config.images.dest))
    .pipe(debug())
    .pipe(gulp.dest(config.images.dest));

  return gulp.src([config.images.src+".svg"])
    .pipe(changed(config.images.dest))
    .pipe(debug())
    .pipe(gulp.dest(config.images.dest));
});

function images() {
  var filter = gulpFilter(['*', '**/*', '!icons/*.png', '!icons', '!svg', '!sequences/**/*']);
  return gulp.src([config.images.src])
    .pipe(changed(config.images.dest))
    .pipe(filter)
    .pipe(debug())
    .pipe(argv.watch ? gutil.noop() : imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
    .pipe(gulp.dest(path.resolve(config.images.dest)));
}

gulp.task('image:sequences', function() {

  return gulp.src([config.images.sequences.src])
    .pipe(changed(config.images.dest))
    .pipe(debug())
    .pipe(gulp.dest(config.images.sequences.dest));
});
