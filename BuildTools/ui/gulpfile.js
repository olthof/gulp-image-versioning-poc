// Originally based off https://github.com/greypants/gulp-starter

var gulp = require('./gulp')([
  'build-sprites',
  'version-assets'
]);

var runSequence = require('run-sequence');

// This runs the default tasks when Gulp is executed.

gulp.task('default', function(callback) {
    runSequence(
        'build-sprites',
        'version-assets',
        callback
    );
});