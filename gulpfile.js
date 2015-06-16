var gulp = require('gulp');
var sass = require('gulp-sass');
var less = require('gulp-less');
var jshint = require('gulp-jshint');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
//var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var gutil = require('gulp-util');
//var filter = require('gulp-filter');
//var mainBowerFiles = require('main-bower-files');

var onError = function( err ) {
  console.log( 'An error occurred:', err.message );
  this.emit( 'end' );
}

// define the default task and add the watch task to it
gulp.task('default', ['watch']);

// Theme CSS
gulp.task('sass', function() {
  return gulp.src('library/scss/style.scss')
    .pipe(sass({compress: true}).on('error', gutil.log))
    .pipe(gulp.dest('library/css/'));
});

// Bootstrap CSS
gulp.task('less', function () {
  return gulp.src(['library/less/roboto.less', 'library/less/ripples.less', 'library/less/material.less', 'library/less/bootstrap.less'])
    .pipe(less({compress: true}).on('error', gutil.log))
//    .pipe(autoprefixer('last 10 versions', 'ie 9'))
//    .pipe(minifyCSS({keepBreaks: false}))
    .pipe(gulp.dest('library/css/'));
});

// Bootstrap JS

// Bootstrap fonts
gulp.task('bootstrap', function () {  
  gulp.src('node_modules/bootstrap/fonts/*')
    .pipe(gulp.dest('library/fonts/').on('error', gutil.log));
});

// Bootstrap-Material Fonts
gulp.task('bootstrapm', function () {
  gulp.src(['bower_components/bootstrap-material-design/fonts/*',
   '!bower_components/bootstrap-material-design/fonts/*.txt'])
    .pipe(gulp.dest('library/fonts/').on('error', gutil.log));
});

// Javascript
gulp.task('jshint', function() {
  return gulp.src('node_modules/bootstrap/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('build-js', function() {
//  return gulp.src(['node_modules/boostrap/dist/js/boostrap.js'])
 return gulp.src(['node_modules/bootstrap/js/transition.js',
  'node_modules/bootstrap/js/alert.js',
  'node_modules/bootstrap/js/button.js',
  'node_modules/bootstrap/js/carousel.js',
  'node_modules/bootstrap/js/collapse.js',
  'node_modules/bootstrap/js/dropdown.js',
  'node_modules/bootstrap/js/modal.js',
  'node_modules/bootstrap/js/tooltip.js',
  'node_modules/bootstrap/js/popover.js',
  'node_modules/bootstrap/js/scrollspy.js',
  'node_modules/bootstrap/js/tab.js',
  'node_modules/bootstrap/js/affix.js'])
   .pipe(sourcemaps.init())
      .pipe(concat('bootstrap.js'))
      //only uglify if gulp is ran with '--type production'
      .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) 
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('library/js/'));
});

gulp.task('build-material-js', function() {
  return gulp.src('bower_components/bootstrap-material-design/scripts/*.js')
    .pipe(sourcemaps.init())
      //.pipe(concat('material.js'))
      //only uglify if gulp is ran with '--type production'
     // .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('library/js/'));
});

// watch files
gulp.task('watch', ['less', 'sass', 'bootstrap', 'bootstrapm','jshint','build-js', 'build-material-js'], function() {
  gulp.watch('node_modules/bootstrap/js/*.js', ['jshint','build-js']);
  gulp.watch('node_modules/bootstrap/less/*.less', ['less']);
});

