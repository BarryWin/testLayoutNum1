var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    del = require('del');

gulp.task('sass', function () {
    return gulp.src('app/sass/*.+(sass|scss)')
        .pipe(sass({outputStyle:'expanded'})).on('error',sass.logError)
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false,
        // tunnel: true, tunnel: "menic", // Demonstration page: http://menic.localtunnel.me
    })
});

gulp.task('clean', async function() {
    return del.sync('dist');
});
gulp.task('watch', function () {
    gulp.watch('app/sass/*.+(sass|scss)', gulp.parallel('sass'));
    gulp.watch('app/**/*.+(html|js)').on('change', browserSync.reload);
});
gulp.task('run', gulp.parallel('browser-sync', 'sass', 'watch'));
gulp.task('build',async function() {
   var buildCss = gulp.src('app/css/*.css')
       .pipe(gulp.dest('dist/css'));
   var buildJs = gulp.src('app/js/*.js')
       .pipe(gulp.dest('dist/js'));
   var buldHtml = gulp.src('app/*.html')
       .pipe(gulp.dest('dist'));
   var buildFonts = gulp.src('app/fonts/**/*')
       .pipe(gulp.dest('dist/fonts'));
});
gulp.task('builder', gulp.series('clean','sass','build'));
gulp.task('default',gulp.series('run'));