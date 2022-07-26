/*
* * * * * ==============================
* * * * * ==============================
* * * * * ==============================
* * * * * ==============================
========================================
========================================
========================================
----------------------------------------
Based on @uswds/compile
----------------------------------------
*/

const gulp = require("gulp");
const uswds = require("@uswds/compile");

uswds.settings.version = 3;

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
const PROJECT_USWDS_SASS_SRC = "./assets/stylesheets/lib/uswds-sass";

// Project Sass theme directory
uswds.paths.dist.theme = "./assets/stylesheets/site";

// Images destination
uswds.paths.dist.img = "./assets/img/lib/uswds";

// Fonts destination
uswds.paths.dist.fonts = "./assets/fonts/lib/uswds";

// Javascript destination
uswds.paths.dist.js = "./assets/js/lib/uswds";

// Compiled CSS destination
uswds.paths.dist.css = "./assets/stylesheets/css";

/*
----------------------------------------
TASKS
----------------------------------------
*/

exports.copyUSWDSTheme = uswds.copyTheme;

exports.copyUSWDSCore = () => {
  return gulp
    .src(`./node_modules/uswds/dist/scss/core/**/**`)
    .pipe(gulp.dest(`${PROJECT_USWDS_SASS_SRC}/core`));
};

exports.copyUSWDSLib = () => {
  return gulp
    .src(`./node_modules/uswds/dist/scss/core/**/**`)
    .pipe(gulp.dest(`${PROJECT_USWDS_SASS_SRC}/lib`));
};

exports.copyUSWDSSettings = () => {
  return gulp
    .src(`./node_modules/uswds/dist/scss/settings/**/**`)
    .pipe(gulp.dest(`${PROJECT_USWDS_SASS_SRC}/settings`));
};

exports.copyFonts = uswds.copyFonts;
exports.copyImages = uswds.copyImages;
exports.copyJS = uswds.copyJS;
exports.copyAssets = uswds.copyAssets;
exports.compileSass = uswds.compileSass;
exports.watch = uswds.watch;
exports.default = uswds.watch;

exports.init = gulp.series(
  this.copyUSWDSTheme,
  this.copyUSWDSCore,
  this.copyUSWDSLib,
  uswds.copyAll,
  uswds.compileSass
);
