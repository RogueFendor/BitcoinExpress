require("any-promise/register")("bluebird");
var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
});
var inject = require('gulp-inject');
 
gulp.task('index', function () {
  var target = gulp.src('./src/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths: 
  var sources = gulp.src(['./src/**/*.js', './src/**/*.css'], {read: false});
 
  return target.pipe(inject(sources))
    .pipe(gulp.dest('./src'));
});
var server = require('gulp-server-livereload');
 
gulp.task('webserver', function() {
  gulp.src('src')
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});
