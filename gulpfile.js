const bourbon = require('bourbon').includePaths,
    neat = require("bourbon-neat").includePaths,
    gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    connect = require('gulp-connect'),
    minify = require('gulp-clean-css'),
    csso = require('gulp-csso'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');

const paths = {
    sass: [
        './src/critical.scss',
        './src/app.scss'
    ],
    watch: './src/**/*.scss',
    output: './app',
    mapOutput: '../app'
};

const autoprefixerOptions = {
    browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

const sassOptions = {
    includePaths: ['styles'].concat(bourbon).concat(neat)
};

gulp.task('sass', function () {
    return gulp
        .src(paths.sass)
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest(paths.output));
});

gulp.task('minify', function () {
    return gulp
        .src(paths.sass)
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(minify())
        .pipe(csso({restructure: true}))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write(paths.mapOutput))
        .pipe(gulp.dest(paths.output));
});

gulp.task('default', ['sass', 'minify'], function () {
    gulp.watch(paths.watch, ['sass', 'minify']);
});

gulp.task('dist', ['sass', 'minify']);