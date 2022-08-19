module.exports = function (eleventyConfig) {
  // server options
  eleventyConfig.setServerOptions({
    port: 3000,
    input: "./dist",
  });

  // override base config
  return {
    dir: {
      input: "src",
      output: "./dist",
      markdownTemplateEngine: "njk",
    },
  };
};
