const path = require("path");
const pug = require("pug");
const imageShortcode = require("./shortcodes/imageShortcode");

module.exports = (config) => {
  config.setLibrary("pug", pug);

  config.setTemplateFormats([
    // Templates:
    "html",
    "pug",
    "md",
    // Static Assets:
    "css",
    "jpeg",
    "jpg",
    "png",
    "svg",
    "woff",
    "woff2",
  ]);

  // Watch all 11ty specific directories
  config.addWatchTarget(path.join(__dirname, "img"));
  config.addWatchTarget(path.join(__dirname, "styles"));
  config.addWatchTarget(path.join(__dirname, "includes"));
  config.addWatchTarget(path.join(__dirname, "data"));
  config.addWatchTarget(path.join(__dirname, "js"));

  config.allPassthroughCopy(path.join(__dirname, "js"));

  // Wait before re-running 11ty command to keep up with concurrently
  config.setWatchThrottleWaitTime(100);

  // 11ty Shortcodes
  config.addJavaScriptFunction("image", imageShortcode);

  return {
    dir: {
      input: path.join(__dirname, "pages"),
      includes: path.join(__dirname, "includes"),
      data: path.join(__dirname, "data"),
      output: path.join(__dirname, "_site"),
    },
  };
};
