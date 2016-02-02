var gulp = require('gulp');

module.exports = function() {

    var rev = require('gulp-rev');
    var filter = require('gulp-filter');
    var revReplace = require('gulp-rev-replace');
    var cssFilter = filter('*.css', {restore: true});
    var pngFilter = filter('*.png', {restore: true});

    return gulp.src(['../../images/sprites/*.png', '../../css/*.css'])
        .pipe(rev())
        .pipe(revReplace())
        .pipe(cssFilter)
        .pipe(gulp.dest('../../dist/css/'))
        .pipe(cssFilter.restore)
        .pipe(pngFilter)
        .pipe(gulp.dest('../../dist/images/sprites'));

};