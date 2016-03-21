var gulp = require("gulp");
var browser = require('browser-sync');
var reload = browser.reload;
var config = require("../config.json");
var historyApiFallback = require('connect-history-api-fallback')

gulp.task('serve', function() {
  browser({
    server: {
      baseDir: config.output.path,
      middleware: [ historyApiFallback() ]
    },
    port: config.server.port
  });
});

exports.refresh = function() {
  return reload({stream:true})
};
