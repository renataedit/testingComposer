// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Define default destination folder
var bower = 'bower_components';
var node_js = 'node_modules';
var own_css = 'css';
var dest_js = 'public/js';
var dest_css = 'public/css';

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src([
        bower + '/jquery/dist/jquery.js',
        bower + '/bootstrap/dist/js/bootstrap.js'
    ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('concat_temp'))
    .pipe(uglify())
    .pipe(rename('all.min.js'))
    .pipe(gulp.dest('dest_js'))
});

// Concatenate & Minify CSS
gulp.task('styles', function() {
    return gulp.src([
        bower + '/bootstrap/dist/css/bootstrap.css',
        own_css + '/style.css'
    ])
    .pipe(concat('all.css'))
    .pipe(gulp.dest('concat_temp'))
    .pipe(uglify())
    .pipe(rename('all.min.css'))
    .pipe(gulp.dest('dest_css'))
});

// // Watch Files For Changes
// gulp.task('watch', function() {
//     gulp.watch(['js/*.js' , 'css/*.css'], ['scripts', 'css']);
// });

// Default Task
gulp.task('default', ['scripts', 'styles']);
