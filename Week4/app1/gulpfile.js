// Gulp 4

const { src, dest, series } = require('gulp');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const inject = require('gulp-inject');
const removeCode = require('gulp-remove-code');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const watch = require('gulp-watch');

function html() {
  return src(['*.html'])
      .pipe(inject(src(['./build/scripts/*.js', './build/**/*.css'], { read: false }),
        {ignorePath: 'build', addRootSlash: false }))
      .pipe(removeCode({ production: true }))
      .pipe(dest('build'));
}

function js() {
  return src('scripts/*.js', { sourcemaps: true })
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('build/scripts'));
}

function css() {
  return src('styles/*.css')
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.css'))
    .pipe(minifyCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('build/styles'));
}

function images() {
  return src('images/*.png')
    .pipe(imagemin())
    .pipe(dest('build/images'));
}

function watch_files() {
  watch('*.html', html);
  watch('scripts/*.js', js);
  watch('styles/*.css', css);
}

exports.default = series(js, css, images, html, watch_files);