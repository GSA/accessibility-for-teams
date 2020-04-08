/*
* * * * * ==============================
* * * * * ==============================
* * * * * ==============================
* * * * * ==============================
========================================
========================================
========================================
----------------------------------------
USWDS SASS GULPFILE
----------------------------------------
*/

const autoprefixer = require("autoprefixer");
const autoprefixerOptions = require("./node_modules/uswds-gulp/config/browsers");
const csso = require("postcss-csso");
const gulp = require("gulp");
const pkg = require("./node_modules/uswds/package.json");
const postcss = require("gulp-postcss");
const replace = require("gulp-replace");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const uswds = require("./node_modules/uswds-gulp/config/uswds");

sass.compiler = require("sass");

/*
----------------------------------------
PATHS
----------------------------------------
- All paths are relative to the
  project root
- Don't use a trailing `/` for path
  names
----------------------------------------
*/

// Project Sass source directory
const PROJECT_SASS_SRC = './assets/stylesheets/lib/uswds-theme';

// Project Sass source directory
const PROJECT_USWDS_SASS_SRC = './assets/stylesheets/lib/uswds-sass';

// Images destination
const IMG_DEST = './assets/img/lib/uswds';

// Fonts destination
const FONTS_DEST = './assets/fonts';

// Javascript destination
const JS_DEST = './assets/js';

// Compiled CSS destination
const CSS_DEST = './assets/stylesheets/lib/uswds';

// Site Sass
const USDS_SASS_SRC = '/assets/stylesheets/';

/*
----------------------------------------
TASKS
----------------------------------------
*/

gulp.task("copy-uswds-setup", () => {
  return gulp
    .src(`${uswds}/scss/theme/**/**`)
    .pipe(gulp.dest(`${PROJECT_SASS_SRC}`));
});

gulp.task('copy-uswds-core', () => {
  return gulp.src(`${uswds}/scss/core/**/**`)
  .pipe(gulp.dest(`${PROJECT_USWDS_SASS_SRC}/core`));
});

gulp.task('copy-uswds-lib', () => {
  return gulp.src(`${uswds}/scss/lib/**/**`)
  .pipe(gulp.dest(`${PROJECT_USWDS_SASS_SRC}/lib`));
});

gulp.task('copy-uswds-settings', () => {
  return gulp.src(`${uswds}/scss/settings/**/**`)
  .pipe(gulp.dest(`${PROJECT_USWDS_SASS_SRC}/settings`));
});

gulp.task("copy-uswds-fonts", () => {
  return gulp.src(`${uswds}/fonts/**/**`).pipe(gulp.dest(`${FONTS_DEST}`));
});

gulp.task("copy-uswds-images", () => {
  return gulp.src(`${uswds}/img/**/**`).pipe(gulp.dest(`${IMG_DEST}`));
});

gulp.task("copy-uswds-js", () => {
  return gulp.src(`${uswds}/js/**/**`).pipe(gulp.dest(`${JS_DEST}`));
});

gulp.task("build-sass", function(done) {
  var plugins = [
    // Autoprefix
    autoprefixer(autoprefixerOptions),
    // Minify
    csso({ forceMediaMerge: false })
  ];
  return (
    gulp
      .src([`${PROJECT_SASS_SRC}/*.scss`])
      .pipe(sourcemaps.init({ largeFile: true }))
      .pipe(
        sass.sync({
          includePaths: [
            `${PROJECT_SASS_SRC}`,
            `${uswds}/scss`,
            `${uswds}/scss/packages`
          ]
        })
      )
      .pipe(replace(/\buswds @version\b/g, "based on uswds v" + pkg.version))
      .pipe(postcss(plugins))
      .pipe(sourcemaps.write("."))
      // uncomment the next line if necessary for Jekyll to build properly
      //.pipe(gulp.dest(`${SITE_CSS_DEST}`))
      .pipe(gulp.dest(`${CSS_DEST}`))
  );
});

gulp.task(
  "init",
  gulp.series(
    "copy-uswds-setup",
    'copy-uswds-core',
    'copy-uswds-lib',
    'copy-uswds-settings',
    "copy-uswds-fonts",
    "copy-uswds-images",
    "copy-uswds-js",
    "build-sass"
  )
);

gulp.task('update', gulp.series(
  'copy-uswds-core',
  'copy-uswds-lib',
  'copy-uswds-settings',
  'copy-uswds-fonts',
  'copy-uswds-images',
  'copy-uswds-js',
  'build-sass',
));

gulp.task("watch-sass", function() {
  gulp.watch(`${PROJECT_SASS_SRC}/**/*.scss`, gulp.series("build-sass"));
});

gulp.task("watch", gulp.series("build-sass", "watch-sass"));

gulp.task("default", gulp.series("watch"));