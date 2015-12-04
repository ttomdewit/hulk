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
 * 6) Clean
 * 7) Default
 * 8) Watch
 */



/**
 * 1) Load plugins
 *
 * Require all modules and define variables.
 */

 var gulp = require('gulp'),
     sass = require('gulp-ruby-sass'),
     autoprefixer = require('gulp-autoprefixer'),
     minifycss = require('gulp-minify-css'),
     jshint = require('gulp-jshint'),
     uglify = require('gulp-uglify'),
     imagemin = require('gulp-imagemin'),
     rename = require('gulp-rename'),
     concat = require('gulp-concat'),
     notify = require('gulp-notify'),
     cache = require('gulp-cache'),
     livereload = require('gulp-livereload'),
     del = require('del');



/**
 * 2) Styles
 *
 * First find all .scss-files withing the /assets/scss/ directory,
 * after that autoprefix what's necessary, then minify, finally move
 * to /assets/dist/css/style.css.
 */

 gulp.task('styles', function() {
   return sass('assets/scss/styles.scss', { style: 'expanded' })
   .pipe(autoprefixer('last 2 versions', 'ie 8', 'ie 9', 'Firefox ESR', 'Opera 12.1'))
   .pipe(minifycss())
   .pipe(gulp.dest('assets/dist/css'))
   .pipe(notify({ message: 'Styles task complete' }));
 });



/**
 * 3) Scripts
 *
 * First find all .js-files withing the /assets/js/ directory,
 * concat all files, add the .min-suffix, uglify and then move to /assets/dist/js.
 */

 gulp.task('scripts', function() {
   return gulp.src('assets/js/**/*.js')
   .pipe(concat('main.js'))
   .pipe(rename({ suffix: '.min' }))
   .pipe(uglify())
   .pipe(gulp.dest('assets/dist/js'))
   .pipe(notify({ message: 'Scripts task complete' }));
 });



/**
 * 4) Images
 *
 * First find all files withing the /assets/img/ directory,
 * after that optimize the images and save them to /assets/dist/img.
 */

 gulp.task('images', function() {
   return gulp.src('assets/img/**/*')
   .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
   .pipe(gulp.dest('assets/dist/img'))
   .pipe(notify({ message: 'Images task complete' }))
 });



/**
 * 5) SVG
 *
 * [[ Explain what this Gulp task does ]].
 */



/**
 * 6) Clean
 *
 * Clean the dist folder prior to moving to production.
 */

 gulp.task('clean', function() {
   return del(['assets/dist/css', 'assets/dist/js', 'assets/dist/img']);
 });



/**
 * 7) Default
 *
 * When we type `$ gulp` in the command line,
 * these default tasks will run.
 */

 gulp.task('default', function() {
   gulp.start('styles', 'scripts', 'images');
 });



/**
 * 8) Watch
 *
 * When we tye `$ gulp watch` in the command line,
 * these files and folders will trigger Gulp tasks.
 */

 gulp.task('watch', function() {
   gulp.watch('assets/scss/**/*.scss', ['styles']);
   gulp.watch('assets/js/**/*.js', ['scripts']);
   gulp.watch('assets/img/**/*', ['images']);
 });
