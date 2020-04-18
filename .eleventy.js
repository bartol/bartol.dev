const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {

  eleventyConfig.addCollection('blog', function(collection) {
    return collection.getAll().filter(function(item) {
      return item.data.layout === 'blog'
    })
  })

  eleventyConfig.addCollection('til', function(collection) {
    return collection.getAll().filter(function(item) {
      return item.data.layout === 'til'
    })
  })

  eleventyConfig.addCollection('reading', function(collection) {
    return collection.getAll().filter(function(item) {
      return item.data.layout === 'reading'
    })
  })

  // eleventyConfig.addCollection('file', function(collection) {

  // })

  eleventyConfig.addFilter('formatDate', function(date) {
    return date.toISOString().substring(0, 10)
  })

  eleventyConfig.addPassthroughCopy("blog");
  eleventyConfig.addPassthroughCopy("til");
  eleventyConfig.addPassthroughCopy("reading");

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
