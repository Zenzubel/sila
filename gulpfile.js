const {src, dest, watch, parallel, series} = require ('gulp');

const scss 			= require('gulp-sass');
const concat 		= require('gulp-concat');
const browserSync 	= require('browser-sync').create();
const uglify 		= require('gulp-uglify-es').default;
const autoprefixer 	= require('gulp-autoprefixer');
const groupMedia 	= require('gulp-group-css-media-queries');
const imagemin 		= require('gulp-imagemin');
const del 			= require('del');

function browsersync () {
	browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
}

function images() {
	return src('app/images/**/*.')
	.pipe(imagemin(
		[
			imagemin.gifsicle({interlaced: true}),
			imagemin.mozjpeg({quality: 75, progressive: true}),
			imagemin.optipng({optimizationLevel: 5}),
			imagemin.svgo({
				plugins: [
					{removeViewBox: true},
					{cleanupIDs: false}
				]
			})
		]
	))
	.pipe(dest('dist/images'));
}

function cleanDist () {
	return del('del');
}

function scripts () {
	return src(['app/js/script/swiper/swiper.js', 'app/js/script/ScrollMagic/ScrollMagic.js', 'app/js/script/ScrollMagic/plugins/debug.addIndicators.js', 'app/js/popups.js'])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(dest('app/js'))
	.pipe(browserSync.stream());
}

function styles () {
	return src('app/scss/style.scss')
	// .pipe(scss({outputStyle: 'compressed'}))
	// .pipe(concat('style.min.css'))
	.pipe(scss({outputStyle: 'expanded'}))
	.pipe(concat('style.css'))
	.pipe(autoprefixer({overrideBrowserList: ['last 10 version'], grid: true}))
	.pipe(groupMedia())
	.pipe(dest('app/css'))
	.pipe(browserSync.stream());
}

function build() {
	return src([
		'app/css/style.css', 
		'app/fonts/**/*', 
		'app/js/*.js', 
		'app/images/**/*', 
		'app/*.html'
	], {base: 'app'})
	.pipe(dest('dist'));
}

function watching () {
	watch(['app/scss/**/*.scss'], styles);
	watch(['app/js/main.js'], scripts);
	watch(['app/*.html']).on('change', browserSync.reload);
}

exports.styles = styles;

exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.images = images;
exports.cleanDist = cleanDist;

exports.build = series(cleanDist, images, build);
exports.default = parallel(styles, scripts, browsersync, watching); 
