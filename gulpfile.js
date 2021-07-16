"use strict";

var gulp = require("gulp");
var pug = require("gulp-pug");
var del = require("del");
var sass = require("gulp-sass");
var imagemin = require("gulp-imagemin");
var pngquant = require("imagemin-pngquant");
var concat = require("gulp-concat");
var concatCss = require("gulp-concat-css");
var sourcemaps = require("gulp-sourcemaps");
var plumber = require("gulp-plumber");
var rigger = require("gulp-rigger");
var uglify = require("gulp-uglify");
var path = require("path");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var postcssImport = require("postcss-import");
var data = require("gulp-data");
var fs = require("fs");
var rename = require("gulp-rename");
// var path = require("path");

gulp.task("pug", function () {
	return gulp
		.src("src/*.pug")
		.pipe(
			data(function (file) {
				return JSON.parse(fs.readFileSync("src/assets/data/data.json"));
			})
		)
		.pipe(
			pug({
				pretty: true,
			})
		)
		.pipe(gulp.dest("build"));
});

gulp.task("css", function () {
	return gulp
		.src("src/assets/css/apps.css")
		.pipe(sourcemaps.init())
		.pipe(postcss([postcssImport()]))
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest("build/assets/css/"));
	// .pipe(rename("apps-x1.css"))
	// .pipe(gulp.dest("build/assets/css/"));
});

// gulp.task("css-x1", function () {
// 	return gulp
// 		.src("src/assets/css/apps.css")
// 		.pipe(rename("apps-x1.css"))
// 		.pipe(sourcemaps.init())
// 		.pipe(postcss([postcssImport()]))
// 		.pipe(sourcemaps.write("."))
// 		.pipe(gulp.dest("build/assets/css/"));
// });

gulp.task("wysiwyg-css", function () {
	return gulp
		.src("src/assets/css/wysiwyg.css")
		.pipe(sourcemaps.init())
		.pipe(postcss([postcssImport()]))
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest("build/assets/css/"));
});

gulp.task("image", function () {
	return gulp
		.src("src/assets/img/**/*.*") //Выберем наши картинки
		.pipe(
			imagemin({
				//Сожмем их
				progressive: true,
				svgoPlugins: [{ removeViewBox: false }],
				use: [pngquant()],
				interlaced: true,
			})
		)
		.pipe(gulp.dest("build/assets/img"));
});

var jsfiles = [
	"node_modules/jquery/dist/jquery.min.js",
	"node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js",
	"node_modules/swiper/js/swiper.min.js",
	"node_modules/jquery.maskedinput/src/jquery.maskedinput.js",
	"node_modules/sweetalert/dist/sweetalert.min.js",
	"node_modules/nouislider/distribute/nouislider.min.js",
	// "node_modules/bootstrap/dist/js/bootstrap.min.js",
	// "node_modules/@popperjs/core/dist/umd/popper.min.js",
	"node_modules/summernote/dist/summernote-lite.js",
	// "node_modules/tinymce/tinymce.min.js",
	// "node_modules/tinymce/themes/silver/theme.js",
];

gulp.task("js", function () {
	return (
		gulp
			.src(jsfiles, { base: "assets/js" })
			// .pipe(rigger()) //Прогоним через rigger
			.pipe(plumber())
			.pipe(sourcemaps.init()) //Инициализируем sourcemap
			.pipe(concat("vendors.js"))
			.pipe(uglify()) //Сожмем наш js
			.pipe(sourcemaps.write("."))
			.pipe(gulp.dest("build/assets/js"))
	);
});

var myjsfiles = [
	"src/assets/js/__globalVar.js",
	"src/assets/js/__leftSlideMenu.js",
	// "src/assets/js/__form.js",
	"src/assets/js/__eSearch.js",
	"src/assets/js/__overlay.js",
	"src/assets/js/__blogSlider.js",
	"src/assets/js/__efilter.js",
	"src/assets/js/__eShopCabinet.js",
	"src/assets/js/__master4.js",
	"src/assets/js/main_old.js",
	"src/assets/js/__bottomAdaptiveMenu.js",
	// "src/assets/js/__headerScroll.js",
	"src/assets/js/__callBack.js",
	"src/assets/js/main.js",
	"src/assets/js/__resize.js",
];

gulp.task("myJs", function () {
	return (
		gulp
			// .src("src/assets/js/**/*.js*")
			// .src("src/assets/js/main.js")
			.src(myjsfiles, { base: "assets/js" })
			.pipe(plumber())
			.pipe(sourcemaps.init()) //Инициализируем sourcemap
			.pipe(concat("main.js")) // в какой файл объединить
			.pipe(uglify()) //Сожмем наш js
			.pipe(sourcemaps.write("."))
			.pipe(gulp.dest("build/assets/js"))
	);
});

gulp.task("fonts", function () {
	return gulp.src("src/assets/fonts/**/*.*").pipe(gulp.dest("build/assets/fonts"));
});

gulp.task("video", function () {
	return gulp.src("src/assets/video/**/*.*").pipe(gulp.dest("build/assets/video"));
});

gulp.task("clean", function () {
	return del("build");
});

gulp.task(
	"build",
	gulp.series("clean", gulp.parallel("css", "wysiwyg-css", "pug", "image", "js", "myJs", "fonts", "video"))
);

gulp.task("watch", function () {
	gulp.watch("src/assets/**/*.css*", gulp.series("css")).on("uplink", function (filepath) {
		remember.forget("css", path.resolve(filepath));
		delete cached.caches.styles[path.resolve(filepath)];
	});
	gulp.watch("src/assets/img/**/*.*", gulp.series("image")).on("uplink", function (filepath) {
		remember.forget("image", path.resolve(filepath));
		delete cached.caches.image[path.resolve(filepath)];
	});
	gulp.watch("src/assets/js/**/*.js*", gulp.series("myJs")).on("uplink", function (filepath) {
		remember.forget("myJs", path.resolve(filepath));
		delete cached.caches.myJs[path.resolve(filepath)];
	});
	gulp.watch("src/**/*.pug", gulp.series("pug"));
});

gulp.task("dev", gulp.series("build", "watch"));
