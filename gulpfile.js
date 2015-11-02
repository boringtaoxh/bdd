'use strict';

var gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    concat      = require('gulp-concat'),
    /* css */
    stylus      = require('gulp-stylus'),
    minifycss   = require('gulp-minify-css'),
    /* js */
    coffee = require('gulp-coffee'),
    vendor = require('gulp-concat-vendor'),
    minifyjs    = require('gulp-uglify'),
    /* server */
    livereload  = require('gulp-livereload'),
    server = livereload(),
    nodemon     = require('gulp-nodemon');

/* build */
var build = {
  styles: ['build/public/assets/styles/*.styl'],
  public: ['build/public/**/*.coffee'],
  server: ['build/server/**/*.coffee'],
  test: ['build/test/**/*.coffee']
}

gulp.task('styles', function(){
  return gulp.src(build.styles)
    .pipe(stylus())
    .pipe(concat('styles.css'))
    .pipe(minifycss({keepBreaks:true}))
    .pipe(gulp.dest('public/assets/styles/'));
});

gulp.task('vendor', function() {  
  return gulp.src('vendor/*')
    .pipe(vendor('vendor.js'))
    .pipe(minifyjs())
    .pipe(gulp.dest('public/assets/scripts/'))
});

gulp.task('public', function() {
  return gulp.src(build.public)
    .pipe(coffee({bare: true}))
    /*.pipe(concat('scripts.js'))
    .pipe(minifyjs())*/
    .pipe(gulp.dest('public/'));
});

gulp.task('server', function() {
  return gulp.src(build.server)
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('server/'));
});

gulp.task('test', function() {
  return gulp.src(build.test)
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('test/'));
});

gulp.task('assets', ['styles', 'public', 'server', 'test']);

/* server */
var paths = {
  client: [
    'public/views/*.jade',
    'public/assets/scripts/*.js',
    'public/assets/styles/*.css'
  ],
  server: {
    index: 'server.js'
  }
};

var nodemonConfig = {
  script : paths.server.index,
  ignore : [
  ],
  env    : {
  }
};

gulp.task('nodemon', ['livereload'], function() {
  return nodemon(nodemonConfig);
});

/* livereload */
gulp.task('livereload', function() {
  gulp.watch(build.styles, ['styles']);
  gulp.watch(build.public, ['public']);
  gulp.watch(build.server, ['server']);
  gulp.watch(paths.client, function(e) {
    server.changed(e.path);
  });
});

gulp.task('default', ['assets', 'nodemon', 'livereload']);