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

/*const autoprefixer = require("autoprefixer");
const csso = require("postcss-csso");
const gulp = require("gulp");
const pkg = require("./node_modules/uswds/package.json");
const postcss = require("gulp-postcss");
const replace = require("gulp-replace");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const uswds = require("./node_modules/uswds-gulp/config/uswds");*/



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
/*const PROJECT_SASS_SRC = './assets/stylesheets/lib/uswds-theme';*/
uswds.paths.dist.theme = './assets/stylesheets/lib/uswds-theme';

// Project Sass source directory
/*const PROJECT_USWDS_SASS_SRC = './assets/stylesheets/lib/uswds-sass';*/
uswds.paths.dist.theme = './assets/stylesheets/lib/uswds-sass';

// Images destination
/*const IMG_DEST = './assets/img/lib/uswds';*/
uswds.paths.dist.img ='./assets/img/lib/uswds';

// Fonts destination
/*const FONTS_DEST = './assets/fonts';*/
uswds.paths.dist.fonts = './assets/fonts';

// Javascript destination
/*const JS_DEST = './assets/js';*/
uswds.paths.dist.js = './assets/js';


// Compiled CSS destination
/*const CSS_DEST = './assets/stylesheets/lib/uswds';*/
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



/*gulp.task("build-sass", function(done) {
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
});*/

/*gulp.task(
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
);*/

/*gulp.task('update', gulp.series(
  'copy-uswds-core',
  'copy-uswds-lib',
  'copy-uswds-settings',
  'copy-uswds-fonts',
  'copy-uswds-images',
  'copy-uswds-js',
  'build-sass',
));*/


exports.init =gulp.series(
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
exports.copyAll = uswds.copyAll;
exports.copyAssets = uswds.copyAssets;
exports.copyFonts = uswds.copyFonts;
exports.copyImages = uswds.copyImages;
exports.copyJS = uswds.copyJS;
exports.copyTheme = uswds.copyTheme;
exports.default = uswds.watch;
exports.init = uswds.init;
exports.updateUswds = uswds.updateUswds;
exports.watch = uswds.watch;