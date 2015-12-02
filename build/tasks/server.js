var gulp = require("gulp");
var browser = require('browser-sync');
var reload = browser.reload;
var config = require("../config.json");

gulp.task('serve', function() {
  browser({
    server: {
      baseDir: config.output.path
    },
    port: config.server.port
  });
});

exports.refresh = function() {
  return reload({stream:true})
};
