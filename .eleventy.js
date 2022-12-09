module.exports = function (eleventyConfig) {
  // ignore folders
  eleventyConfig.ignores.add("./src/assets/");

  // watch targets (add small wait time before rebuild)
  eleventyConfig.setWatchThrottleWaitTime(200);
  eleventyConfig.addWatchTarget("./src/assets/scss/**/*");
  eleventyConfig.addWatchTarget("./src/assets/js/**/*");

  // server options
  eleventyConfig.setServerOptions({
    port: 3000,
  });

  // override base config
  return {
    dir: {
      input: "./src",
      output: "./dist",
      markdownTemplateEngine: "njk",
    },
  };
};
