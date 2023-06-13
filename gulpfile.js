const { src, dest, series, watch } = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const gulpif = require('gulp-if');
const cleanCss = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
var jsLocalPath = require('./assets/js/main.js');
let buildPath = '';

const jsBuild = () => {
    return src(jsLocalPath.jsPath)
        .pipe(gulpif(buildPath == '', sourcemaps.init()))
        .pipe(concat('script.js'))
        .pipe(gulpif(buildPath == '', sourcemaps.write()))
        .pipe(dest(buildPath + 'assets/js/'))
        .pipe(gulpif(buildPath != '', uglify()))
        .pipe(gulpif(buildPath != '', rename('script.min.js')))
        .pipe(gulpif(buildPath != '', dest(buildPath + 'assets/js/')))

}

const cssBuild = () => {
    return src('assets/css/bundle.scss')
        .pipe(gulpif(buildPath == '', sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulpif(buildPath == '', sourcemaps.write()))
        .pipe(rename('style.css'))
        .pipe(dest(buildPath + 'assets/css/'))
        .pipe(gulpif(buildPath != '', cleanCss()))
        .pipe(gulpif(buildPath != '', rename('style.min.css')))
        .pipe(gulpif(buildPath != '', dest(buildPath + 'assets/css/')))

}

const browserRefresh = () => {
    return browserSync.reload();
}

function start(cb) {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    series(jsBuild, cssBuild)();
    watch(['assets/js/*.js', '!assets/js/script.js'], (cb) => {
        series(jsBuild, browserRefresh)();
        cb();
    });
    watch('assets/css/*.scss', (cb) => {
        series(cssBuild, browserRefresh)();
        cb();
    });
    watch('./*.html', (cb) => {
        browserRefresh();
        cb();
    });
    cb();
}

function build(cb) {
    buildPath = 'build/';
    series(jsBuild, cssBuild)();
    src(['assets/**/*', '!assets/css/*', '!assets/js/*'])
        .pipe(dest(buildPath + 'assets'));
    src('*.html')
        .pipe(dest(buildPath));
    cb();
}

exports.start = start;
exports.default = start;
exports.build = build;