var gulp = require('gulp');

module.exports = function() {

    var gulp = require('gulp');
    var buffer = require('vinyl-buffer');
    var csso = require('gulp-csso');
    var imagemin = require('gulp-imagemin');
    var merge = require('merge-stream');
    var spritesmith = require('gulp.spritesmith');

    /*  ==========================================================================
    Sprite tasks for each folder
    ==========================================================================  */


    /*  Sprite main
        ========================================================================== */
 
        var spriteData = gulp.src('../../images/sprites/sprite-main/*.png').pipe(spritesmith({
            // The sprite's image file name
            imgName: 'sprite-main.png',

            // The sprite's image location in the CSS
            imgPath: '//common.xxxxx.local/images/sprite-main.png',

            // The sprite's css file name
            cssName: 'sprite-main.css',

            cssOpts: {
                    // Prefixes the CSS selectors with ".sprite-"
                    cssSelector: function (sprite) {
                        return '.sprite-' + sprite.name;
                    }
                }
            })
        );

        // Pipe image stream through image optimizer and onto disk 
        var imgStream = spriteData.img
            // DEV: We must buffer our stream into a Buffer for `imagemin` 
            .pipe(buffer()).pipe(imagemin()).pipe(gulp.dest('../../images/sprites/'));
        
        // Pipe CSS stream through CSS optimizer and onto disk 
        var cssStream = spriteData.css.pipe(csso()).pipe(gulp.dest('../../css/'));


    /*  Sprite communication
        ========================================================================== */
 
        var spriteData = gulp.src('../../images/sprites/sprite-communication/*.png').pipe(spritesmith({
            imgName: 'sprite-communication.png',
            imgPath: '//common.xxxxx.local/images/sprite-communication.png',
            cssName: 'sprite-communication.css',
            cssOpts: {
                    cssSelector: function (sprite) {
                        return '.sprite-' + sprite.name;
                    }
                }
            })
        );

        // Pipe image stream through image optimizer and onto disk 
        var imgStream = spriteData.img
            // DEV: We must buffer our stream into a Buffer for `imagemin` 
            .pipe(buffer()).pipe(imagemin()).pipe(gulp.dest('../../images/sprites/'));
        
        // Pipe CSS stream through CSS optimizer and onto disk 
        var cssStream = spriteData.css.pipe(csso()).pipe(gulp.dest('../../css/'));


    /*  Sprite social
        ========================================================================== */
 
        var spriteData = gulp.src('../../images/sprites/sprite-social/*.png').pipe(spritesmith({
            imgName: 'sprite-social.png',
            imgPath: '//common.xxxxx.local/images/sprite-social.png',
            cssName: 'sprite-social.css',
            cssOpts: {
                    cssSelector: function (sprite) {
                        return '.sprite-' + sprite.name;
                    }
                }
            })
        );

        // Pipe image stream through image optimizer and onto disk 
        var imgStream = spriteData.img
            // DEV: We must buffer our stream into a Buffer for `imagemin` 
            .pipe(buffer()).pipe(imagemin()).pipe(gulp.dest('../../images/sprites/'));
        
        // Pipe CSS stream through CSS optimizer and onto disk 
        var cssStream = spriteData.css.pipe(csso()).pipe(gulp.dest('../../css/'));

        
        // Return a merged stream to handle both `end` events 
        return merge(imgStream, cssStream);

};