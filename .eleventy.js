const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection('til', function(collection) {
    return collection.getAll().filter(function(item) {
      return item.data.type === 'til'
    })
  })

  eleventyConfig.addFilter('formatDate', function(date) {
    return date.toISOString().substring(0, 10)
  })

  eleventyConfig.addPassthroughCopy("files");
  eleventyConfig.addPassthroughCopy("css");

  eleventyConfig.addPlugin(pluginRss);

  return {
    dir: {
      output: "build",
      layouts: "templates",
      data: "data"
    },
    htmlTemplateEngine: "njk",
  }
};
