const { dest, src } = require('gulp');
const rollup = require('gulp-better-rollup');
const babel = require('@rollup/plugin-babel');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const { terser } = require('rollup-plugin-terser');

const runBabel = () => {
	return src('js/**/*')
		.pipe(rollup({ plugins: [babel, resolve, commonjs, terser()] }, 'umd'))
		.pipe(dest('_site/js'));
};

module.exports = runBabel;
