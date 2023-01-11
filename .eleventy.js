module.exports = function (eleventyConfig) {
  // server config
  eleventyConfig.setServerOptions({
    port: 3000,
  });

  // don't ignore .gitignore entries
  eleventyConfig.setUseGitIgnore(false);

  // ignore assets folders (NPM scripts pipeline)
  eleventyConfig.ignores.add("./src/assets/");

  // passthrough copy
  eleventyConfig.setServerPassthroughCopyBehavior("copy");
  eleventyConfig.addPassthroughCopy({ "./temp/css/": "assets/css/" });
  eleventyConfig.addPassthroughCopy({ "./temp/js/": "assets/js/" });

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
