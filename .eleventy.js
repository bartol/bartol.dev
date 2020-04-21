module.exports = function(eleventyConfig) {
  return {
    dir: {
      output: "build",
      layouts: "templates",
      data: "data"
    },
    htmlTemplateEngine: "njk",
  }
};
