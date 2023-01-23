module.exports = function (eleventyConfig) {
  // ignore folders
  eleventyConfig.ignores.add("./src/assets/");

  // server options
  eleventyConfig.setServerOptions({
    watch: ["./dist/assets/css/**/*", "./dist/assets/js/**/*"],
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
