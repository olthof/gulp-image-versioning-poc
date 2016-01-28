var gulp = require('gulp');

module.exports = function() {

    var gulp = require('gulp');
    var rev = require('gulp-rev');
     
    return gulp.src('../../images/sprites/*.png')
        .pipe(rev())
        .pipe(gulp.dest('../../dist/'));

};