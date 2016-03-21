var gulp = require("gulp");
var spritesmith = require('gulp.spritesmith');
var server = require("./server");
var config = require("../config.json");

gulp.task('sprites', function () {
  var spriteData = gulp.src(config.sprites.src).pipe(spritesmith({
    imgName: config.sprites.img_name,
    cssName: config.sprites.css_name,
    padding:2
  }));
  spriteData.img.pipe(gulp.dest(config.sprites.img_dest));
  spriteData.css.pipe(gulp.dest(config.sprites.css_dest)).pipe(server.refresh());
});
