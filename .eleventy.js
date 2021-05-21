const path = require('path');
const imageShortcode = require('./shortcodes/imageShortcode');

module.exports = (config) => {
	const pug = require('pug');
	config.setLibrary('pug', pug);

	config.setTemplateFormats([
		// Templates:
		'html',
		'pug',
		'md',
		// Static Assets:
		'css',
		'jpeg',
		'jpg',
		'png',
		'svg',
		'woff',
		'woff2',
	]);

	// Watch all 11ty specific directories
	config.addWatchTarget(path.join(__dirname, 'img'));
	config.addWatchTarget(path.join(__dirname, 'scss'));
	config.addWatchTarget(path.join(__dirname, 'includes'));
	config.addWatchTarget(path.join(__dirname, 'data'));
	config.addWatchTarget(path.join(__dirname, 'js'));

	config.addPassthroughCopy('js');
	config.addPassthroughCopy('assets');

	// Wait before re-running 11ty command to keep up with concurrently
	config.setWatchThrottleWaitTime(100);

	// 11ty Shortcodes
	config.addJavaScriptFunction('image', imageShortcode);

	return {
		dir: {
			input: path.join(__dirname, 'pages'),
			// Relative to the 'pages' directory
			includes: '../includes',
			data: '../data',
			output: '_site',
		},
	};
};
