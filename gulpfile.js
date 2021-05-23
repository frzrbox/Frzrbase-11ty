const { parallel, watch } = require('gulp');

const css = require('./tasks/css');
const runBabel = require('./tasks/runBabel');

const watcher = () => {
	watch('./scss/**/*', { ignoreInitial: true }, css);
	watch('./js/**/*', { ignoreInitial: true }, runBabel);
};

exports.default = parallel(css, runBabel);

exports.watch = watcher;
