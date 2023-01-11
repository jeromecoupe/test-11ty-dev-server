module.exports = function (eleventyConfig) {
  // don't ignore .gitignore entries
  eleventyConfig.setUseGitIgnore(false);

  // ignore folders
  eleventyConfig.ignores.add("./src/assets/");

  // server options
  eleventyConfig.setServerOptions({
    port: 3000,
    input: "_dist",
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
