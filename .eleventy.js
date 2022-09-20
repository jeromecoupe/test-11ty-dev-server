module.exports = function (eleventyConfig) {
  // watch targets (should trigger a build)
  eleventyConfig.addWatchTarget("./src/assets/scss/");
  eleventyConfig.addWatchTarget("./src/assets/js/");

  // server options
  eleventyConfig.setServerOptions({
    port: 3000,
    input: "./dist",
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
