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




/*sass.compiler = require("sass");*/
const gulp = require("gulp");
const uswds = require("@uswds/compile");


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
uswds.paths.dist.theme = './assets/stylesheets/lib/uswds-theme';

// Project Sass source directory
uswds.paths.dist.theme = './assets/stylesheets/lib/uswds-sass';

// Images destination
uswds.paths.dist.img ='./assets/img/lib/uswds';

// Fonts destination
uswds.paths.dist.fonts = './assets/fonts';

// Javascript destination
uswds.paths.dist.js = './assets/js';


// Compiled CSS destination
uswds.paths.dist.css = './assets/stylesheets/lib/uswds';

/*
----------------------------------------
TASKS
----------------------------------------
*/



gulp.task('copy-uswds-core', () => {
  return gulp.src(`${uswds}/scss/core/**/**`)
  .pipe(gulp.dest(`${uswds.paths.dist.theme}/core`));
});

gulp.task('copy-uswds-lib', () => {
  return gulp.src(`${uswds}/scss/lib/**/**`)
  .pipe(gulp.dest(`${uswds.paths.dist.theme}/lib`));
});

gulp.task('copy-uswds-settings', () => {
  return gulp.src(`${uswds}/scss/settings/**/**`)
  .pipe(gulp.dest(`${uswds.paths.dist.theme}/settings`));
});


exports.init = gulp.series(
  'copy-uswds-core',
  'copy-uswds-lib',
  'copy-uswds-settings',
);

exports.update = gulp.series(
  'copy-uswds-core',
  'copy-uswds-lib',
  'copy-uswds-settings',

);

exports.compile = uswds.compile;
exports.compileIcons = uswds.compileIcons;
exports.compileSass = uswds.compileSass;
exports.copyAssets = uswds.copyAssets;
exports.copyFonts = uswds.copyFonts;
exports.copyImages = uswds.copyImages;
exports.copyJS = uswds.copyJS;
exports.copyTheme = uswds.copyTheme;
exports.updateUswds = uswds.updateUswds;
exports.watch = uswds.watch;