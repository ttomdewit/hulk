/**
 * Main Gulp file
 *
 * This main Gulp file imports all modules and
 * creates all Gulp tasks accordingly.
 *
 * Table of contents
 * 1) Load plugins
 * 2) Styles
 * 3) Scripts
 * 4) Images
 * 5) SVG
 * 6) Critical CSS
 * 7) Clean
 * 8) Clear
 * 9) Default
 * 10) Watch
 */



/**
 * 1) Load plugins
 *
 * Require all modules and define variables.
 */

 var gulp           = require('gulp'),
     browserSync    = require('browser-sync').create(),
     sass           = require('gulp-ruby-sass'),
     autoprefixer   = require('gulp-autoprefixer'),
     pixrem         = require('gulp-pixrem'),
     minifycss      = require('gulp-cssnano'),
     jshint         = require('gulp-jshint'),
     uglify         = require('gulp-uglify'),
     imagemin       = require('gulp-imagemin'),
     svg2png        = require('gulp-svg2png'),
     svgSymbols     = require('gulp-svg-symbols'),
     rename         = require('gulp-rename'),
     concat         = require('gulp-concat'),
     notify         = require('gulp-notify'),
     cache          = require('gulp-cache'),
     del            = require('del'),
     critical       = require('critical');



/**
 * 2) Styles
 *
 * First find all .scss-files within the /assets/scss/ directory,
 * after that autoprefix what's necessary, then minify, finally move
 * to /assets/dist/css/style.css.
 */

gulp.task('styles', function() {
  return sass('assets/scss/styles.scss', { style: 'expanded' })
  .pipe(autoprefixer('last 2 versions', 'ie 8', 'ie 9', 'Firefox ESR', 'Opera 12.1'))
  .pipe(pixrem({ rootValue: '1em' }))
  .pipe(minifycss())
  .pipe(gulp.dest('assets/dist/css'))
  .pipe(browserSync.stream())
  .pipe(notify({ title: 'Styles', message: 'Task completed' }))
});

gulp.task('styles-ie', function() {
  return sass('assets/scss/ie.scss', { style: 'expanded' })
  .pipe(autoprefixer('last 2 versions', 'ie 8', 'ie 9', 'Firefox ESR', 'Opera 12.1'))
  .pipe(pixrem({ rootValue: '1em' }))
  .pipe(minifycss())
  .pipe(gulp.dest('assets/dist/css'))
  .pipe(browserSync.stream())
  .pipe(notify({ title: 'Styles', message: 'Task completed' }))
});





/**
 * 3) Scripts
 *
 * First find all .js-files withing the /assets/js/ directory,
 * concat all files, add the .min-suffix, uglify and then move to /assets/dist/js.
 */

gulp.task('scripts-head', function() {
  return gulp.src(['assets/js/head.js', 'assets/js/vendor/modernizr.js'])
  .pipe(concat('head.js'))
  .pipe(rename({ suffix: '.min' }))
  .pipe(uglify())
  .pipe(gulp.dest('assets/dist/js'))
  .pipe(browserSync.stream())
  .pipe(notify({ title: 'Scripts', message: 'Task completed' }))
});

gulp.task('scripts', function() {
  return gulp.src(['node_modules/jquery/dist/jquery.js', 'assets/js/vendor/*.js', 'assets/js/**/*.js', '!assets/js/head.js', '!assets/js/vendor/modernizr.js'])
  .pipe(concat('main.js'))
  .pipe(rename({ suffix: '.min' }))
  .pipe(uglify())
  .pipe(gulp.dest('assets/dist/js'))
  .pipe(browserSync.stream())
  .pipe(notify({ title: 'Scripts', message: 'Task completed' }))
});



/**
 * 4) Images
 *
 * First find all files within the /assets/img/ directory,
 * after that optimize the images and save them to /assets/dist/img.
 */

gulp.task('images', function() {
  return gulp.src('assets/img/**/*')
  .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
  .pipe(gulp.dest('assets/dist/img'))
  .pipe(browserSync.stream())
  .pipe(notify({ title: 'Images', message: 'Task completed' }))
});



/**
 * 5) SVG
 *
 * First find all SVG files within the /assets/img/ directory,
 * after that optimize SVGs, make fallback PNGs and save them to /assets/img/icons
 */

gulp.task('svg2png', function() {
  return gulp.src('assets/img/**/*.svg')
  .pipe(svg2png())
  .pipe(gulp.dest('assets/dist/img/icons/png'))
  .pipe(notify({ title: 'SVG 2 PNG', message: 'Task completed' }))
});

gulp.task('svg', ['svg2png'], function() {
  return gulp.src('assets/img/**/*.svg')
  .pipe(
    svgSymbols({
      className: '.icon--%f'
    })
  )
  .pipe(gulp.dest('assets/dist/img/icons'))
  .pipe(notify({ title: 'SVG', message: 'Task completed' }))
});



/**
 * 6) Critical CSS
 *
 * When we type `$ gulp critical` in the command line,
 * this command will extract the critical css and inlines HTML and CSS.
 *
 * WARNING: you should have a play with it's output and change the `dest` while you're at it.
 */

gulp.task('critical', function() {
  critical.generate({
    inline: true,
    base: './',
    src: 'index.html',
    css: ['assets/dist/css/styles.css'],
    dest: 'index.html',
    minify: true,
    width: 1300,
    height: 900,
    ignore: ['body.debug:before']
  });
});



/**
 * 7) Clean
 *
 * Clean the dist folder prior to moving to production.
 */

gulp.task('clean', function() {
  return del(['assets/dist/css', 'assets/dist/js', 'assets/dist/img']);
});



/**
 * 8) Clear
 *
 * Clear the cache.
 */

gulp.task('clear', function (done) {
  return cache.clearAll(done);
});



/**
 * 9) Default
 *
 * When we type `$ gulp` in the command line,
 * these default tasks will run.
 */

gulp.task('default', ['clean'], function() {
  gulp.start('clean', 'styles', 'styles-ie', 'scripts', 'scripts-head', 'images', 'svg');
});



/**
 * 10) Watch
 *
 * When we tye `$ gulp watch` in the command line,
 * these files and folders will trigger Gulp tasks.
 */

gulp.task('watch', function() {
  browserSync.init({ server: './' });

  gulp.watch('assets/scss/**/*.scss', ['styles', 'styles-ie']);
  gulp.watch('assets/js/**/*.js', ['scripts', 'scripts-head']);
  gulp.watch('assets/img/**/*', ['images']);
  gulp.watch('assets/img/**/*.svg', ['svg']);

  gulp.watch(['*.html']).on('change', browserSync.reload);
});
