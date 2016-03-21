var gulp = require("gulp");
var es = require('event-stream');
var error = require('./util/error');
var log = require('./util/log');
var plumber = require('gulp-plumber')
var spritesmith = require('gulp.spritesmith');
var svgSprite = require('gulp-svg-sprite');
var server = require("./server");
var config = require("../config.json");
var debug = require('gulp-debug');
var changed = require('gulp-changed');
var path = require("path");

gulp.task('sprites', function () {

  log.start()

  var spriteData = gulp.src(config.sprites.src).pipe(spritesmith({
    imgName: config.sprites.img_name,
    cssName: config.sprites.css_name,
    padding:2
  }));
  spriteData.img.pipe(gulp.dest(config.sprites.img_dest));
  spriteData.css.pipe(gulp.dest(config.sprites.css_dest)).pipe(server.refresh());

  var cssPath = "shared/spritesheet"

  var svg = gulp.src(config.sprites.svg.src)
    .pipe(plumber())
    .pipe(debug())
    .pipe(svgSprite( {
      mode:{
        view:{
          dest: cssPath,
          sprite: "./images/sprite",
          render: {
            styl:true
          }
        },
      }
    }))
    .on('error', error)
    .pipe(gulp.dest(config.sprites.svg.img_dest));

  log.end()

  return es.concat(spriteData);
});
